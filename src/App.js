import './App.css';
import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Home />} path='/home' />
      </Routes>
    </>
  );
}

export default App;
