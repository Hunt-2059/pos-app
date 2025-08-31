import React, { useEffect, useState } from 'react'
import db from '../dexie/db'
export default function Reports(){ const [reports,setReports]=useState({}); const [sales,setSales]=useState([]);
 useEffect(()=>{ const r=localStorage.getItem('reports'); if(r) setReports(JSON.parse(r)); db.sales.orderBy('timestamp').reverse().limit(100).toArray().then(setSales) },[]);
 const saveDaily=()=>{ const day=new Date().toISOString().split('T')[0]; const total=sales.reduce((s,x)=>s+(x.total||0),0); const newR={...reports,[day]:{totalSales:total,transactions:sales.length}}; setReports(newR); localStorage.setItem('reports',JSON.stringify(newR)) }
 return (<div><h2 className="text-xl">Reports</h2><div className="bg-white dark:bg-gray-800 p-4 rounded shadow"><div>Total (shown): ${sales.reduce((s,x)=>s+(x.total||0),0).toFixed(2)}</div><button onClick={saveDaily} className="mt-3 px-3 py-1 bg-indigo-600 text-white rounded">Save Daily Report</button><pre className="mt-3">{JSON.stringify(reports,null,2)}</pre></div></div>) }
