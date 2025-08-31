import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
export default function Navbar(){ const { role, logout } = useContext(AuthContext); return (<nav className="bg-white dark:bg-gray-800 shadow p-4 flex gap-4 items-center"><div className="font-bold">POS App</div><div className="flex gap-3">{(role==='admin' || role==='cashier') && <Link to="/cashier">Cashier</Link>}{role==='admin' && <Link to="/admin">Admin</Link>}{role==='admin' && <Link to="/reports">Reports</Link>}</div><div className="ml-auto"><button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded">Logout</button></div></nav>) }
