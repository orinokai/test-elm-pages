module Page.PokedexNumber_ exposing (Data, Model, Msg, page)

import DataSource exposing (DataSource)
import DataSource.Http
import Head
import Head.Seo as Seo
import Html exposing (..)
import Html.Attributes exposing (src)
import OptimizedDecoder as Decode
import Page exposing (Page, PageWithState, StaticPayload)
import Page.PokedexNumber_
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path
import Secrets
import Shared
import View exposing (View)


type alias Model =
    {}


type alias Msg =
    Never


type alias RouteParams =
    { pokedexNumber : String }


page : Page RouteParams Data
page =
    Page.prerenderWithFallback
        { head = head
        , pages = pages
        , data = data
        , handleFallback =
            \{ pokedexNumber } ->
                let
                    asNumber : Int
                    asNumber =
                        String.toInt pokedexNumber |> Maybe.withDefault -1
                in
                DataSource.succeed
                    (asNumber > 0 && asNumber <= 150)
        }
        |> Page.buildNoState { view = view }


pages : DataSource (List RouteParams)
pages =
    DataSource.succeed []


data : RouteParams -> DataSource Data
data routeParams =
    DataSource.map2 Data
        (DataSource.Http.get (Secrets.succeed "https://elm-pages-pokedex.netlify.app/.netlify/functions/time")
            Decode.string
        )
        (DataSource.Http.get (Secrets.succeed ("https://pokeapi.co/api/v2/pokemon/" ++ routeParams.pokedexNumber))
            (Decode.map2 Pokemon
                (Decode.field "forms" (Decode.index 0 (Decode.field "name" Decode.string)))
                (Decode.field "types" (Decode.list (Decode.field "type" (Decode.field "name" Decode.string))))
            )
        )


type alias Pokemon =
    { name : String
    , abilities : List String
    }


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages Pokedex"
        , image =
            { url = static.routeParams |> pokemonImage |> Pages.Url.external
            , alt = static.data.pokemon.name
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title =
            "Pokedex #"
                ++ static.routeParams.pokedexNumber
                ++ " "
                ++ static.data.pokemon.name
        }
        |> Seo.website


type alias Data =
    { time : String
    , pokemon : Pokemon
    }


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = static.data.pokemon.name
    , body =
        [ h1 []
            [ text static.data.pokemon.name
            ]
        , text (static.data.pokemon.abilities |> String.join ", ")
        , img
            [ static.routeParams |> pokemonImage |> src
            ]
            []
        , p []
            [ text static.data.time
            ]
        ]
    }


pokemonImage : RouteParams -> String
pokemonImage routeParams =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" ++ routeParams.pokedexNumber ++ ".png"
