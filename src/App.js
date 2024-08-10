// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users'; 
import Posts from './pages/Posts'; 

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/users" element={loggedIn ? <Users /> : <Navigate to="/login" />} />
        <Route path="/posts" element={loggedIn ? <Posts /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

