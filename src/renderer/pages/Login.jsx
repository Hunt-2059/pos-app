
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cashier');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(login(username, password, role)){
      if(role === 'admin') navigate('/admin');
      else navigate('/cashier');
    } else {
      alert('Invalid password!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border mb-2" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-2" />
        <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full p-2 border mb-4">
          <option value="cashier">Cashier</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white py-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
