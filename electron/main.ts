import path from "path";
import is from "electron-is";
import installExtension from "electron-devtools-installer";
import { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null = null;

(async () => {
  await app.whenReady();

  if (is.dev()) {
    // Setup Hot Reloading
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron"
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });

    // Setup DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name: string) => console.log(`Added Extension:  ${name}`))
      .catch((err: Error) => console.error("An error occurred: ", err));
  }

  await createMainWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createMainWindow();
    }
  });
})().catch((err) => {
  console.error(err);
});

async function createMainWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: true,
    center: true,
  });

  if (is.production()) {
    await mainWindow.loadURL(`file://${__dirname}/../index.html`);
  } else {
    await mainWindow.loadURL("http://localhost:3000/index.html");
  }

  mainWindow.show();
  mainWindow.focus();
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => (mainWindow = null));
}
