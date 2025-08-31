
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cashier from './pages/Cashier';
import Admin from './pages/Admin';
import Reports from './pages/Reports';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import AccessDenied from './components/AccessDenied';

function App() {
  const { role } = useContext(AuthContext);

  return (
    <Router>
      {role && <Navbar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cashier' element={role==='cashier' || role==='admin' ? <Cashier /> : <AccessDenied />} />
        <Route path='/admin' element={role==='admin' ? <Admin /> : <AccessDenied />} />
        <Route path='/reports' element={role==='admin' ? <Reports /> : <AccessDenied />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
