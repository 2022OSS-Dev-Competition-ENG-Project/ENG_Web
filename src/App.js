import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/Main/MainLog';
import SignUp from './Pages/Account/SignUp';

import Main from './Pages/Main/Main';
import Banner from './Pages/Main/MainBanner';

import BuildingList from './Pages/Building/BuildingList';
import BuildingRegister from './Pages/Building/BuildingRegister';
import Qr from './Pages/Building/Qr';

import NoticeWrite from './Pages/Notice/NoticeWrite';
import NoticeList from './Pages/Notice/NoticeList';
import NoticeView from './Pages/Notice/NoticeView';

import PostView from './Pages/Post/PostView';
import PostList from './Pages/Post/PostList';

import ReportView from './Pages/Report/ReportView';
import ReportList from './Pages/Report/ReportList';

import ResetPw from './Pages/Account/ResetPw';
import ManagerRegister from './Pages/Manager/ManagerRegister';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/main" element={<Main />}> </Route>
        <Route path="/banner" element={<Banner />}> </Route>

        <Route path="/BuildingList" element={<BuildingList />}> </Route>
        <Route path="/building/:itemI" element={<Qr />}> </Route>
        <Route path="/mypage" element={<ResetPw />}> </Route>
        
        <Route path="/report" element={<ReportList />} ></Route>
        <Route path="/report/:itemI" element={<ReportView />} ></Route>

        <Route path="/notice" element={<NoticeList />} ></Route>
        <Route path="/notice/write" element={<NoticeWrite />}> </Route>
        <Route path="/notice/:itemI" element={<NoticeView/>}> </Route>
        
        <Route path="/post" element={<PostList />} ></Route>
        <Route path="/post/:itemI" element={<PostView/>}> </Route>
        


        <Route path="/register/building" element={<BuildingRegister />}> </Route>
        <Route path="/register/manager" element={<ManagerRegister />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
