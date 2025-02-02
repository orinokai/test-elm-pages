const htmlTemplate = "<!DOCTYPE html>\n<!-- ROOT --><html lang=\"en\">\n  <head>\n    <link rel=\"modulepreload\" href=\"/assets/index.1764c0d6.js\" />\n    <script defer src=\"/elm.5f038c07.js\" type=\"text/javascript\"></script>\n    \n    \n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n    <title><!-- PLACEHOLDER_TITLE --></title>\n    <meta name=\"generator\" content=\"elm-pages v2.1.11\" />\n    <meta name=\"mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"theme-color\" content=\"#ffffff\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta\n      name=\"apple-mobile-web-app-status-bar-style\"\n      content=\"black-translucent\"\n    />\n    <!-- PLACEHOLDER_HEAD_AND_DATA -->\n    <script type=\"module\" crossorigin src=\"/assets/index.1764c0d6.js\"></script>\n    <link rel=\"stylesheet\" href=\"/assets/index.d0b5e347.css\">\n  </head>\n  <body>\n    <div data-url=\"\" display=\"none\"></div>\n    <!-- PLACEHOLDER_HTML -->\n  </body>\n</html>";
const devMode = true;

const compiledPortsFile = "../dist/port-data-source.mjs";
const Elm = require("../dist/elm-pages-cli.js");
const renderer = require("../generator/src/render.js");
const preRenderHtml = require("../generator/src/pre-render-html.js");


export async function onRequest(context) {
  const { request, env, next } = context;

  let res = await next();
  if (res.status !== 404) {
    return res;
  }

  try {
    const requestTime = new Date();
    const basePath = "/";
    const mode = "build";
    const addWatcher = () => {};

    const renderResult = await renderer(
      compiledPortsFile,
      basePath,
      Elm,
      mode,
      new URL(request.url).pathname,
      await requestToJson(request, requestTime),
      addWatcher,
      false,
      {
        getEnv: function (name) {
          return env[name];
        },
      }
    );

    const statusCode = renderResult.is404 ? 404 : renderResult.statusCode;

    if (renderResult.kind === "bytes") {
      return new Response(renderResult.contentDatPayload.buffer, {
        headers: {
          "Content-Type": "application/octet-stream",
          "x-powered-by": "elm-pages",
          ...renderResult.headers,
        },
        status: statusCode,
      });
    } else if (renderResult.kind === "api-response") {
      const serverResponse = renderResult.body;
      return new Response(serverResponse.body, {
        // isBase64Encoded: serverResponse.isBase64Encoded, // TODO check if base64 encoded, if it is then convert base64 string to binary
        headers: serverResponse.headers,
        status: serverResponse.statusCode,
      });
    } else {
      return new Response(
        preRenderHtml.replaceTemplate(htmlTemplate, renderResult.htmlString),
        {
          headers: {
            "Content-Type": "text/html",
            "x-powered-by": "elm-pages",
            ...renderResult.headers,
          },
          status: statusCode,
        }
      );
    }
  } catch (error) {
    if (devMode) {
      return new Response(
        `<body><h1>Error</h1><pre>${error.toString()}</pre><div><pre>${
          error.stack
        }</pre></div></body>`,
        {
          status: 500,
          headers: {
            "Content-Type": "text/html",
            "x-powered-by": "elm-pages",
          },
        }
      );
    } else {
      return new Response(`<body><h1>Internal Error</h1></body>`, {
        status: 500,
        headers: {
          "Content-Type": "text/html",
          "x-powered-by": "elm-pages",
        },
      });
    }
  }
}
async function requestToJson(request, requestTime) {
  return {
    method: request.method,
    body: request.body && (await request.text()),
    headers: request.headers,
    rawUrl: request.url,
    requestTime: Math.round(requestTime.getTime()),
    multiPartFormData: null,
  };
}
