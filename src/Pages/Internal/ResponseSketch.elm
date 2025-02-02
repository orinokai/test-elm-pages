module Pages.Internal.ResponseSketch exposing (ResponseSketch(..))

import Pages.Internal.NotFoundReason exposing (NotFoundReason)
import Path exposing (Path)


type ResponseSketch data shared
    = RenderPage data
    | HotUpdate data shared
    | Redirect String
    | NotFound { reason : NotFoundReason, path : Path }
