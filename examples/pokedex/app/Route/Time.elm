module Route.Time exposing (Data, Model, Msg, route)

import DataSource exposing (DataSource)
import Dict exposing (Dict)
import ErrorPage exposing (ErrorPage)
import Head
import Head.Seo as Seo
import Html
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import RouteBuilder exposing (StatefulRoute, StatelessRoute, StaticPayload)
import Server.Request as Request
import Server.Response as Response exposing (Response)
import Shared
import Url
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    ()


type alias RouteParams =
    {}


route : StatelessRoute RouteParams Data
route =
    RouteBuilder.serverRender
        { head = head
        , data = data
        }
        |> RouteBuilder.buildNoState { view = view }


type alias Request =
    { language : Maybe String
    , method : Request.Method
    , queryParams : Dict String (List String)
    , protocol : Url.Protocol
    , allHeaders : Dict String String
    }



--data : ServerRequest.IsAvailable -> RouteParams -> DataSource (PageServerResponse Data)
--data serverRequestKey routeParams =
--    let
--        serverReq : ServerRequest Request
--        serverReq =
--            ServerRequest.init
--                (\language method queryParams protocol allHeaders ->
--                    { language = language
--                    , method = method
--                    , queryParams = queryParams |> QueryParams.toDict
--                    , protocol = protocol
--                    , allHeaders = allHeaders
--                    }
--                )
--                |> ServerRequest.optionalHeader "accept-language"
--                |> ServerRequest.withMethod
--                |> ServerRequest.withQueryParams
--                |> ServerRequest.withProtocol
--                |> ServerRequest.withAllHeaders
--    in
--    serverReq
--        |> ServerRequest.toDataSource serverRequestKey
--        |> DataSource.andThen
--            (\req ->
--                case req.queryParams |> Dict.get "redirect" of
--                    Just [ redirectTo ] ->
--                        DataSource.succeed (PageServerResponse.ServerResponse (ServerResponse.temporaryRedirect redirectTo))
--
--                    Just redirectParams ->
--                        DataSource.succeed
--                            (PageServerResponse.ServerResponse
--                                (ServerResponse.stringBody
--                                    ("I got the wrong number of redirect query parameters (expected 1):\n"
--                                        ++ (redirectParams |> String.join "\n")
--                                    )
--                                    |> ServerResponse.withStatusCode 400
--                                )
--                            )
--
--                    _ ->
--                        req
--                            |> DataSource.succeed
--                            |> DataSource.map Data
--                            |> DataSource.map PageServerResponse.RenderPage


data : RouteParams -> Request.Parser (DataSource (Response Data ErrorPage))
data routeParams =
    Request.succeed ()
        |> Request.map
            (\() ->
                Response.plainText "Hello, this is a string"
                    |> DataSource.succeed
            )


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
        , title = "Time"
        }
        |> Seo.website


type alias Data =
    { request : Request
    }


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "Time"
    , body =
        [ Html.text
            (static.data.request.language
                |> Maybe.withDefault "No language"
            )
        ]
    }
