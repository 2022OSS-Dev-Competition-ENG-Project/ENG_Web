import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/MainLog';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/main" element={<Main />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
