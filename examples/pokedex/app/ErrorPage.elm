module ErrorPage exposing (ErrorPage(..), Model, Msg, internalError, notFound, statusCode, view)

import Head
import Html exposing (Html)
import View exposing (View)


type alias Model =
    ()


type Msg
    = NoOp


head : ErrorPage -> List Head.Tag
head errorPage =
    []


type ErrorPage
    = NotFound
    | InternalError String


notFound : ErrorPage
notFound =
    NotFound


internalError : String -> ErrorPage
internalError =
    InternalError


view : ErrorPage -> View msg
view error =
    { body =
        [ Html.div []
            [ Html.text "Hi! This is a NotFound error"
            ]
        ]
    , title = "This is a NotFound Error"
    }


statusCode : ErrorPage -> number
statusCode error =
    case error of
        NotFound ->
            404

        InternalError _ ->
            500
