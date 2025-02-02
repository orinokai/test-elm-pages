module Route.Greet exposing (Data, Model, Msg, route)

import DataSource exposing (DataSource)
import Effect exposing (Effect)
import ErrorPage exposing (ErrorPage)
import Head
import Head.Seo as Seo
import Html.Styled as Html exposing (Html)
import Html.Styled.Attributes as Attr
import Html.Styled.Events exposing (onSubmit)
import MySession
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import RouteBuilder exposing (StatefulRoute, StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Server.Session as Session
import Shared
import Time
import View exposing (View)


type alias Model =
    {}


type Msg
    = Logout
    | NoOp


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
            , init = init
            , update = update
            , subscriptions = \_ _ _ _ _ -> Sub.none
            }


init :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> ( Model, Effect Msg )
init maybePageUrl sharedModel static =
    ( {}, Effect.none )


update :
    PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> Msg
    -> Model
    -> ( Model, Effect Msg )
update pageUrl sharedModel static msg model =
    case msg of
        NoOp ->
            ( model, Effect.none )

        Logout ->
            ( model, Effect.Logout NoOp )


type alias Data =
    { username : String
    , requestTime : Time.Posix
    , flashMessage : Maybe String
    }


data : RouteParams -> Request.Parser (DataSource (Response Data ErrorPage))
data routeParams =
    Request.oneOf
        [ Request.map2 (\a b -> Data a b Nothing)
            (Request.expectQueryParam "name")
            Request.requestTime
            |> Request.map
                (\requestData ->
                    requestData
                        |> Response.render
                        |> Response.withHeader
                            "x-greeting"
                            ("hello there " ++ requestData.username ++ "!")
                        |> DataSource.succeed
                )
        , Request.requestTime
            |> MySession.expectSessionOrRedirect
                (\requestTime session ->
                    let
                        username : String
                        username =
                            session
                                |> Session.get "name"
                                |> Maybe.withDefault "NONAME"

                        flashMessage : Maybe String
                        flashMessage =
                            session
                                |> Session.get "message"
                    in
                    ( session
                    , { username = username
                      , requestTime = requestTime
                      , flashMessage = flashMessage
                      }
                        |> Response.render
                        |> Response.withHeader
                            "x-greeting"
                            ("hello " ++ username ++ "!")
                    )
                        |> DataSource.succeed
                )
        ]


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title = "TODO title" -- metadata.title -- TODO
        }
        |> Seo.website


view :
    Maybe PageUrl
    -> Shared.Model
    -> Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel model static =
    { title = "Hello!"
    , body =
        [ static.data.flashMessage
            |> Maybe.map (\message -> flashView (Ok message))
            |> Maybe.withDefault (Html.p [] [ Html.text "No flash" ])
        , Html.text <| "Hello " ++ static.data.username ++ "!"
        , Html.text <| "Requested page at " ++ String.fromInt (Time.posixToMillis static.data.requestTime)
        , Html.div []
            [ Html.form [ Attr.method "post", Attr.action "/logout", onSubmit Logout ]
                [ Html.button
                    [ Attr.type_ "submit" ]
                    [ Html.text "Logout" ]
                ]
            ]
        ]
    }


flashView : Result String String -> Html msg
flashView message =
    Html.p
        [ Attr.style "background-color" "rgb(163 251 163)"
        ]
        [ Html.text <|
            case message of
                Ok okMessage ->
                    okMessage

                Err error ->
                    "Something went wrong: " ++ error
        ]
