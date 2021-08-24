const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  dir: process.cwd(),

  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },

    on(channel, func) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    
    once(channel, func) {
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    },
  },
});
