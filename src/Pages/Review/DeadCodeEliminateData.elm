module Pages.Review.DeadCodeEliminateData exposing (rule)

import Elm.Syntax.Declaration as Declaration exposing (Declaration)
import Elm.Syntax.Expression as Expression exposing (Expression)
import Elm.Syntax.Node as Node exposing (Node)
import Review.Fix
import Review.ModuleNameLookupTable as ModuleNameLookupTable exposing (ModuleNameLookupTable)
import Review.Rule as Rule exposing (Error, Rule)


type alias Context =
    { lookupTable : ModuleNameLookupTable }


rule : Rule
rule =
    Rule.newModuleRuleSchemaUsingContextCreator "Pages.Review.DeadCodeEliminateData" initialContext
        |> Rule.withExpressionEnterVisitor expressionVisitor
        |> Rule.withDeclarationEnterVisitor declarationVisitor
        |> Rule.fromModuleRuleSchema


initialContext : Rule.ContextCreator () Context
initialContext =
    Rule.initContextCreator
        (\lookupTable () ->
            { lookupTable = lookupTable
            }
        )
        |> Rule.withModuleNameLookupTable


declarationVisitor : Node Declaration -> Context -> ( List (Error {}), Context )
declarationVisitor node context =
    case Node.value node of
        Declaration.FunctionDeclaration { declaration } ->
            case Node.value declaration of
                { name, expression } ->
                    case ( Node.value name, Node.value expression ) of
                        ( "template", Expression.RecordExpr setters ) ->
                            let
                                dataFieldValue : Maybe (Node ( Node String, Node Expression ))
                                dataFieldValue =
                                    setters
                                        |> List.filterMap
                                            (\recordSetter ->
                                                case Node.value recordSetter of
                                                    ( keyNode, valueNode ) ->
                                                        if Node.value keyNode == "data" then
                                                            if isAlreadyApplied (Node.value valueNode) then
                                                                Nothing

                                                            else
                                                                recordSetter |> Just

                                                        else
                                                            Nothing
                                            )
                                        |> List.head
                            in
                            dataFieldValue
                                |> Maybe.map
                                    (\dataValue ->
                                        ( [ Rule.errorWithFix
                                                { message = "Codemod"
                                                , details = [ "" ]
                                                }
                                                (Node.range dataValue)
                                                [ Review.Fix.replaceRangeBy (Node.range dataValue) "data = DataSource.fail \"\"\n    "
                                                ]
                                          ]
                                        , context
                                        )
                                    )
                                |> Maybe.withDefault
                                    ( [], context )

                        _ ->
                            ( [], context )

        _ ->
            ( [], context )


expressionVisitor : Node Expression -> Context -> ( List (Error {}), Context )
expressionVisitor node context =
    case Node.value node of
        Expression.Application applicationExpressions ->
            case applicationExpressions |> List.map (\applicationNode -> ( ModuleNameLookupTable.moduleNameFor context.lookupTable applicationNode, Node.value applicationNode )) of
                [ ( Just [ "RouteBuilder" ], Expression.FunctionOrValue _ pageBuilderName ), ( _, Expression.RecordExpr fields ) ] ->
                    let
                        dataFieldValue : Maybe (Node ( Node String, Node Expression ))
                        dataFieldValue =
                            fields
                                |> List.filterMap
                                    (\recordSetter ->
                                        case Node.value recordSetter of
                                            ( keyNode, valueNode ) ->
                                                if Node.value keyNode == "data" then
                                                    if isAlreadyApplied (Node.value valueNode) then
                                                        Nothing

                                                    else
                                                        recordSetter |> Just

                                                else
                                                    Nothing
                                    )
                                |> List.head
                    in
                    dataFieldValue
                        |> Maybe.map
                            (\dataValue ->
                                ( [ Rule.errorWithFix
                                        { message = "Codemod"
                                        , details = [ "" ]
                                        }
                                        (Node.range dataValue)
                                        [ case pageBuilderName of
                                            "preRender" ->
                                                Review.Fix.replaceRangeBy (Node.range dataValue) "data = \\_ -> DataSource.fail \"\""

                                            "preRenderWithFallback" ->
                                                Review.Fix.replaceRangeBy (Node.range dataValue) "data = \\_ -> DataSource.fail \"\""

                                            "serverRender" ->
                                                Review.Fix.replaceRangeBy (Node.range dataValue) "data = \\_ -> Request.oneOf []\n        "

                                            "single" ->
                                                Review.Fix.replaceRangeBy (Node.range dataValue) "data = DataSource.fail \"\"\n       "

                                            _ ->
                                                Review.Fix.replaceRangeBy (Node.range dataValue) "data = data"
                                        ]
                                  ]
                                , context
                                )
                            )
                        |> Maybe.withDefault
                            ( [], context )

                _ ->
                    ( [], context )

        _ ->
            ( [], context )


isAlreadyApplied : Expression -> Bool
isAlreadyApplied expression =
    case expression of
        Expression.LambdaExpression info ->
            case Node.value info.expression of
                Expression.Application applicationNodes ->
                    case applicationNodes |> List.map Node.value of
                        (Expression.FunctionOrValue [ "DataSource" ] "fail") :: _ ->
                            True

                        (Expression.FunctionOrValue [ "Request" ] "oneOf") :: (Expression.ListExpr []) :: _ ->
                            True

                        _ ->
                            False

                _ ->
                    False

        Expression.Application applicationNodes ->
            case applicationNodes |> List.map Node.value of
                (Expression.FunctionOrValue [ "DataSource" ] "fail") :: _ ->
                    True

                _ ->
                    False

        _ ->
            False
