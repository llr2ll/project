const { app, BrowserWindow } = require("electron");

function createWindow() {
    let mainWin

    mainWin = new BrowserWindow({
        webPreferences: { nodeIntegration: true },
        show: false
    })

    mainWin.maximize()
    
    mainWin.webContents.on("did-finish-load", () => {
        const { title, version } = require("./package.json");
        mainWin.setTitle(`${title} ( ${version} )`);
    })

    mainWin.once("ready-to-show", () => mainWin.show())
    mainWin.on("closed", () => mainWin = null)
    mainWin.loadURL(process.env.START_URL)
}

app.on("ready", createWindow);