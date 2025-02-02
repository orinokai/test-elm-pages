const fs = require("fs");
const fsExtra = require("fs-extra");
const copyModifiedElmJson = require("./rewrite-elm-json.js");
const copyModifiedElmJsonClient = require("./rewrite-client-elm-json.js");
const { elmPagesCliFile, elmPagesUiFile } = require("./elm-file-constants.js");
const spawnCallback = require("cross-spawn").spawn;
const which = require("which");
const {
  generateTemplateModuleConnector,
} = require("./generate-template-module-connector.js");
const path = require("path");
const { ensureDirSync, deleteIfExists } = require("./file-helpers.js");
global.builtAt = new Date();

/**
 * @param {string} basePath
 */
async function generate(basePath) {
  const cliCode = generateTemplateModuleConnector(basePath, "cli");
  const browserCode = generateTemplateModuleConnector(basePath, "browser");
  ensureDirSync("./elm-stuff");
  ensureDirSync("./.elm-pages");
  ensureDirSync("./elm-stuff/elm-pages/.elm-pages");

  const uiFileContent = elmPagesUiFile();

  await Promise.all([
    copyToBoth("RouteBuilder.elm"),
    copyToBoth("SharedTemplate.elm"),
    copyToBoth("SiteConfig.elm"),

    fs.promises.writeFile("./.elm-pages/Pages.elm", uiFileContent),
    fs.promises.copyFile(
      path.join(__dirname, `./elm-application.json`),
      `./elm-stuff/elm-pages/elm-application.json`
    ),
    // write `Pages.elm` with cli interface
    fs.promises.writeFile(
      "./elm-stuff/elm-pages/.elm-pages/Pages.elm",
      elmPagesCliFile()
    ),
    fs.promises.writeFile(
      "./elm-stuff/elm-pages/.elm-pages/Main.elm",
      cliCode.mainModule
    ),
    fs.promises.writeFile(
      "./elm-stuff/elm-pages/.elm-pages/Route.elm",
      cliCode.routesModule
    ),
    fs.promises.writeFile("./.elm-pages/Main.elm", browserCode.mainModule),
    fs.promises.writeFile("./.elm-pages/Route.elm", browserCode.routesModule),
    // write modified elm.json to elm-stuff/elm-pages/
    copyModifiedElmJson(),
    ...(await listFiles("./Pages/Internal")).map(copyToBoth),
  ]);
}

async function newCopyBoth(modulePath) {
  await fs.promises.copyFile(
    path.join(__dirname, modulePath),
    path.join(`./elm-stuff/elm-pages/client/.elm-pages/`, modulePath)
  );
}

async function generateClientFolder(basePath) {
  const browserCode = generateTemplateModuleConnector(basePath, "browser");
  const uiFileContent = elmPagesUiFile();
  ensureDirSync("./elm-stuff/elm-pages/client/app");
  ensureDirSync("./elm-stuff/elm-pages/client/.elm-pages");
  await newCopyBoth("RouteBuilder.elm");
  await newCopyBoth("SharedTemplate.elm");
  await newCopyBoth("SiteConfig.elm");

  await copyModifiedElmJsonClient();
  await fsExtra.copy("./app", "./elm-stuff/elm-pages/client/app", {
    recursive: true,
  });

  await fs.promises.writeFile(
    "./elm-stuff/elm-pages/client/.elm-pages/Main.elm",
    browserCode.mainModule
  );
  await fs.promises.writeFile(
    "./elm-stuff/elm-pages/client/.elm-pages/Route.elm",
    browserCode.routesModule
  );
  await fs.promises.writeFile(
    "./elm-stuff/elm-pages/client/.elm-pages/Pages.elm",
    uiFileContent
  );
  await runElmReviewCodemod("./elm-stuff/elm-pages/client/");
}

/**
 * @param {string} [ cwd ]
 */
async function runElmReviewCodemod(cwd) {
  return new Promise(async (resolve, reject) => {
    const child = spawnCallback(
      `elm-review`,
      [
        "--fix-all-without-prompt",
        "--report",
        "json",
        "--namespace",
        "elm-pages",
        "--config",
        path.join(__dirname, "../../generator/dead-code-review"),
        "--elmjson",
        "elm.json",
        "--compiler",
        await which("lamdera"),
      ],
      { cwd: path.join(process.cwd(), cwd || ".") }
    );

    let scriptOutput = "";

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", function (/** @type {string} */ data) {
      scriptOutput += data.toString();
    });

    child.stderr.setEncoding("utf8");
    child.stderr.on("data", function (/** @type {string} */ data) {
      scriptOutput += data.toString();
    });
    child.on("error", function () {
      reject(scriptOutput);
    });

    child.on("close", function (code) {
      if (code === 0) {
        resolve(scriptOutput);
      } else {
        reject(scriptOutput);
      }
    });
  });
}

/**
 * @param {string} moduleToCopy
 * @returns { Promise<void> }
 */
async function copyToBoth(moduleToCopy) {
  await Promise.all([
    fs.promises.mkdir(path.dirname(path.join(`./.elm-pages/`, moduleToCopy)), {
      recursive: true,
    }),
    fs.promises.mkdir(
      path.dirname(
        path.join(`./elm-stuff/elm-pages/.elm-pages/`, moduleToCopy)
      ),
      { recursive: true }
    ),
  ]);
  await Promise.all([
    fs.promises.copyFile(
      path.join(__dirname, moduleToCopy),
      path.join(`./.elm-pages/`, moduleToCopy)
    ),
    fs.promises.copyFile(
      path.join(__dirname, moduleToCopy),
      path.join(`./elm-stuff/elm-pages/.elm-pages/`, moduleToCopy)
    ),
  ]);
}

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function listFiles(dir) {
  try {
    const fullDir = path.join(__dirname, dir);
    const files = await fs.promises.readdir(fullDir);
    return merge(
      await Promise.all(
        files.flatMap(async (file_) => {
          const file = path.join(dir, path.basename(file_));
          if (
            (await fs.promises.stat(path.join(__dirname, file))).isDirectory()
          ) {
            return await listFiles(file);
          } else {
            return [file];
          }
        })
      )
    );
  } catch (e) {
    return [];
  }
}

/**
 * @param {any[]} arrays
 */
function merge(arrays) {
  return [].concat.apply([], arrays);
}

module.exports = { generate, generateClientFolder };
