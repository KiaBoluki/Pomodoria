const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
      preload: path.join( __dirname , 'preload.js' )
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
};

app.whenReady().then(() => { createWindow });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// include the Node.js 'path' module at the top of your file
const path = require('path')
