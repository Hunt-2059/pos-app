import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Cashier from './pages/Cashier'
import Admin from './pages/Admin'
import Reports from './pages/Reports'
import { AuthProvider, AuthContext } from './context/AuthContext'
import Navbar from './components/Navbar'
import AccessDenied from './components/AccessDenied'

function AppRoutes(){ const { role } = useContext(AuthContext); return (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/cashier' element={role==='cashier' || role==='admin' ? <Cashier /> : <AccessDenied />} />
    <Route path='/admin' element={role==='admin' ? <Admin /> : <AccessDenied />} />
    <Route path='/reports' element={role==='admin' ? <Reports /> : <AccessDenied />} />
    <Route path='*' element={<Navigate to='/' /> } />
  </Routes>
) }
export default function App(){ return (<AuthProvider><Router><MainApp /></Router></AuthProvider>) }
function MainApp(){ const { role } = useContext(AuthContext); return (<div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">{role && <Navbar />}<div className="p-4"><AppRoutes /></div></div>) }
