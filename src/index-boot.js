import db, { seedSampleData } from './dexie/db'
async function boot(){ await seedSampleData(); if(window.electronAPI?.readBackup){ const b=await window.electronAPI.readBackup(); if(b && b.inventory){ const c=await db.inventory.count(); if(c===0) await db.inventory.bulkAdd(b.inventory) } } }
boot()
