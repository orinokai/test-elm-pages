const htmlTemplate =
  '<!DOCTYPE html>\n<!-- ROOT --><html lang="en">\n  <head>\n    <link rel="modulepreload" href="/assets/index.1764c0d6.js" />\n    <script defer src="/elm.4493abca.js" type="text/javascript"></script>\n    \n    \n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <title><!-- PLACEHOLDER_TITLE --></title>\n    <meta name="generator" content="elm-pages v2.1.11" />\n    <meta name="mobile-web-app-capable" content="yes" />\n    <meta name="theme-color" content="#ffffff" />\n    <meta name="apple-mobile-web-app-capable" content="yes" />\n    <meta\n      name="apple-mobile-web-app-status-bar-style"\n      content="black-translucent"\n    />\n    <!-- PLACEHOLDER_HEAD_AND_DATA -->\n    <script type="module" crossorigin src="/assets/index.1764c0d6.js"></script>\n    <link rel="stylesheet" href="/assets/index.d0b5e347.css">\n  </head>\n  <body>\n    <div data-url="" display="none"></div>\n    <!-- PLACEHOLDER_HTML -->\n  </body>\n</html>';
const devMode = true;
import { createRequire } from "https://deno.land/std@0.130.0/node/module.ts";
const require = createRequire(import.meta.url);
const compiledPortsFile = "../dist/port-data-source.mjs";

export default async function render(request, context) {
  return new Response("Hello again!");
}
