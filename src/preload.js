const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electronAPI', { notifyDesktop: (payload) => ipcRenderer.invoke('notify-desktop', payload), readBackup: () => ipcRenderer.invoke('read-backup'), writeBackup: (payload) => ipcRenderer.invoke('write-backup', payload) })
