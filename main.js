// First electron app from scratch
const { app, BrowserWindow } = require("electron");

// Global window reference to JS doesn't garbage collect it
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");
  //win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
