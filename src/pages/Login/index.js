import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaUserShield } from 'react-icons/fa'; 
import './index.css';

const Login = ({ setLoggedIn }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true); 
      navigate('/'); 
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <h2><FaUserShield style={{ marginRight: '8px' }} /> Admin</h2>
        <div>
          <label className='label'>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className='label'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
