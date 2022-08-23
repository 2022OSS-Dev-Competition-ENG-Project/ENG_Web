import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/MainLog';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import BuildingList from './Pages/BuildingList';
import NoticeWrite from './Pages/NoticeWrite';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/main" element={<Main />}> </Route>
        <Route path="/BuildingList" element={<BuildingList />}> </Route>
        <Route path="/notice/write" element={<NoticeWrite />}> </Route>
        <Route path="/layout" element={<Layout />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
