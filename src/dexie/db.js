import Dexie from 'dexie'
import CryptoJS from 'crypto-js'
const DB_NAME='pos_db'; const db=new Dexie(DB_NAME)
db.version(1).stores({ inventory:'++id,sku,name,price,qty', sales:'++id,timestamp,items,total', customers:'++id,name,phone,email' })
const ENC_KEY='pos_demo_key_change_me'
export function encrypt(obj){ return CryptoJS.AES.encrypt(JSON.stringify(obj),ENC_KEY).toString() }
export function decrypt(cipher){ try{ const bytes=CryptoJS.AES.decrypt(cipher,ENC_KEY); return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) }catch(e){ return null } }
export async function seedSampleData(){ const invCount=await db.inventory.count(); if(invCount>0) return; await db.inventory.bulkAdd([{ sku:'P001', name:'Blue T-Shirt', price:12.99, qty:50 },{ sku:'P002', name:'Red Mug', price:6.5, qty:120 },{ sku:'P003', name:'Notebook A5', price:3.75, qty:200 }]); await db.customers.bulkAdd([{ name:'John Doe', phone:'+10000000000', email:'john@example.com' },{ name:'Jane Smith', phone:'+19999999999', email:'jane@example.com' }]); await db.sales.add({ timestamp: Date.now(), items:[{ sku:'P001', qty:2 }], total:25.98 }) }
export default db
