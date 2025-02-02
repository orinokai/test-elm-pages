module Route.Todos exposing (Data, Model, Msg, route)

import Api.InputObject
import Api.Mutation
import Api.Object
import Api.Object.Todo
import Api.Object.TodoPage
import Api.Query
import Api.Scalar exposing (Id(..))
import DataSource exposing (DataSource)
import Effect exposing (Effect)
import ErrorPage exposing (ErrorPage)
import Form exposing (Form)
import Form.Value
import Graphql.Operation exposing (RootMutation, RootQuery)
import Graphql.SelectionSet as SelectionSet
import Head
import Head.Seo as Seo
import Html exposing (Html)
import Html.Attributes as Attr
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path exposing (Path)
import Request.Fauna
import Route
import RouteBuilder exposing (StatefulRoute, StatelessRoute, StaticPayload)
import Server.Request as Request exposing (Parser)
import Server.Response as Response exposing (Response)
import Set exposing (Set)
import Shared
import Time
import View exposing (View)


type alias Model =
    { submitting : Bool
    , deleting : Set String
    }


type Msg
    = FormMsg Form.Msg
    | NoOp
    | FormSubmitted { contentType : String, body : String }
    | DeleteFormSubmitted String { contentType : String, body : String }
    | SubmitComplete


type alias RouteParams =
    {}


route : StatefulRoute RouteParams Data Model Msg
route =
    RouteBuilder.serverRender
        { head = head
        , data = data
        }
        |> RouteBuilder.buildWithLocalState
            { view = view
            , update = update
            , subscriptions = subscriptions
            , init = init
            }


init :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> ( Model, Effect Msg )
init maybePageUrl sharedModel static =
    ( { submitting = False
      , deleting = Set.empty
      }
    , Effect.none
    )


update :
    PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> Msg
    -> Model
    -> ( Model, Effect Msg )
update pageUrl sharedModel static msg model =
    case msg of
        FormMsg formMsg ->
            ( model, Effect.none )

        NoOp ->
            ( model, Effect.none )

        FormSubmitted info ->
            ( { model | submitting = True }
            , Effect.FetchRouteData
                { body = Just info
                , path = Nothing
                , toMsg = \_ -> SubmitComplete
                }
            )

        SubmitComplete ->
            ( { model | submitting = False }, Effect.none )

        DeleteFormSubmitted id record ->
            ( { model
                | deleting = model.deleting |> Set.insert id
              }
            , Effect.FetchRouteData
                { body = Just record
                , path = Nothing
                , toMsg = \_ -> NoOp
                }
            )


subscriptions : Maybe PageUrl -> RouteParams -> Path -> Shared.Model -> Model -> Sub Msg
subscriptions maybePageUrl routeParams path sharedModel model =
    Sub.none


type alias Data =
    { todos : List Todo
    }


type alias Todo =
    { description : String
    , id : String
    }


type alias TodoInput =
    { description : String }


todos : SelectionSet.SelectionSet (List Todo) RootQuery
todos =
    Api.Query.allTodos identity
        (Api.Object.TodoPage.data todoSelection
            |> SelectionSet.nonNullElementsOrFail
        )


createTodo : String -> SelectionSet.SelectionSet Todo RootMutation
createTodo description =
    Api.Mutation.createTodo
        { data =
            Api.InputObject.buildTodoInput
                { description = description
                , completed = False
                }
        }
        todoSelection


deleteTodo : String -> SelectionSet.SelectionSet () RootMutation
deleteTodo id =
    Api.Mutation.deleteTodo { id = Id id }
        (Api.Object.Todo.id_ |> SelectionSet.map (\_ -> ()))
        |> SelectionSet.map (Maybe.withDefault ())


todoSelection : SelectionSet.SelectionSet Todo Api.Object.Todo
todoSelection =
    SelectionSet.map2 Todo
        Api.Object.Todo.description
        (Api.Object.Todo.id_ |> SelectionSet.map (\(Id id) -> id))


data : RouteParams -> Parser (DataSource (Response Data ErrorPage))
data routeParams =
    Request.oneOf
        [ Form.submitHandlers2 (deleteItemForm "")
            (\model decoded ->
                case decoded of
                    Ok id ->
                        Request.Fauna.mutationDataSource "" (deleteTodo id)
                            |> DataSource.map
                                (\_ -> Route.redirectTo Route.Todos)

                    Err error ->
                        { todos = [] }
                            |> Response.render
                            |> DataSource.succeed
            )
        , Form.submitHandlers2 (newItemForm False)
            (\model decoded ->
                case decoded of
                    Ok okItem ->
                        Request.Fauna.mutationDataSource "" (createTodo okItem.description)
                            |> DataSource.map
                                (\_ -> Route.redirectTo Route.Todos)

                    Err error ->
                        { todos = []
                        }
                            |> Response.render
                            |> DataSource.succeed
            )
        , Request.requestTime
            |> Request.map
                (\time ->
                    Request.Fauna.dataSource (time |> Time.posixToMillis |> String.fromInt) todos
                        |> DataSource.map Data
                        |> DataSource.map Response.render
                )
        ]


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "Full-stack elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "Full-stack elm-pages Todo App demo"
        , locale = Nothing
        , title = "elm-pages Todo App"
        }
        |> Seo.website


view :
    Maybe PageUrl
    -> Shared.Model
    -> Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel model static =
    { title = "Todos"
    , body =
        [ Html.ul []
            (static.data.todos
                |> List.map
                    (\item ->
                        Html.li
                            (if model.deleting |> Set.member item.id then
                                [ Attr.style "opacity" "0.5"
                                ]

                             else
                                []
                            )
                            [ Html.text item.description
                            , deleteItemForm item.id
                                |> Form.toHtml2
                                    { onSubmit = DeleteFormSubmitted item.id }
                                    Html.form
                                    (Form.init (deleteItemForm item.id))
                            ]
                    )
            )
        , newItemForm model.submitting
            |> Form.toHtml2
                { onSubmit = FormSubmitted }
                Html.form
                (Form.init (newItemForm model.submitting))
        ]
    }


newItemForm : Bool -> Form String TodoInput (Html Msg)
newItemForm submitting =
    Form.succeed (\description () -> TodoInput description)
        |> Form.with
            (Form.text "description"
                (\{ toInput } ->
                    Html.input (Attr.autofocus True :: toInput) []
                        |> Html.map (\_ -> NoOp)
                )
                |> Form.required "Required"
            )
        |> Form.with
            (Form.submit
                (\{ attrs } ->
                    Html.button attrs
                        [ Html.text
                            (if submitting then
                                "Submitting..."

                             else
                                "Submit"
                            )
                        ]
                        |> Html.map (\_ -> NoOp)
                )
            )


deleteItemForm : String -> Form String String (Html Msg)
deleteItemForm id =
    Form.succeed
        (\id_ _ -> id_)
        |> Form.with
            (Form.hidden "id"
                id
                (\attrs ->
                    Html.input attrs []
                        |> Html.map (\_ -> NoOp)
                )
                |> Form.withInitialValue (Form.Value.string id)
            )
        |> Form.with
            (Form.submit
                (\{ attrs } ->
                    Html.button attrs
                        [ Html.text "X" ]
                        |> Html.map (\_ -> NoOp)
                )
            )
