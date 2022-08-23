import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/MainLog';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import BuildingList from './Pages/BuildingList';
import NoticeWrite from './Pages/NoticeWrite';
import Layout from './Components/Layout';
import PostWrite from './Pages/PostWrite';
import BuildingRegister from './Pages/BuildingRegister';
import ManagerRegister from './Pages/ManagerRegister';
import NoticeView from './Pages/NoticeView';
import PostView from './Pages/PostView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/main" element={<Main />}> </Route>
        <Route path="/layout" element={<Layout />}> </Route>
        <Route path="/BuildingList" element={<BuildingList />}> </Route>

        <Route path="/notice/write" element={<NoticeWrite />}> </Route>
        <Route path="/post/write" element={<PostWrite />}> </Route>

        <Route path="/notice/detail" element={<NoticeView/>}> </Route>
        <Route path="/post/detail" element={<PostView/>}> </Route>

        <Route path="/register/building" element={<BuildingRegister />}> </Route>
        <Route path="/register/manager" element={<ManagerRegister />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
