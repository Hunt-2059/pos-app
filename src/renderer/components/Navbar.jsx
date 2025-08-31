
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar(){
  const { role, logout } = useContext(AuthContext);
  return (
    <nav className="bg-gray-800 text-white p-2 flex space-x-4">
      {role==='cashier' && <Link to="/cashier">Cashier</Link>}
      {role==='admin' && <><Link to="/cashier">Cashier</Link><Link to="/admin">Admin</Link><Link to="/reports">Reports</Link></>}
      <button onClick={logout} className="ml-auto bg-red-500 px-2 py-1">Logout</button>
    </nav>
  );
}

export default Navbar;
