import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/MainLog';
import SignUp from './Pages/SignUp';
import FindID from './Pages/FindID';
import FindPW from './Pages/FindPW';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/findid" element={<FindID />}> </Route>
        <Route path="/findpw" element={<FindPW />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
