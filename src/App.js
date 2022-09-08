import './App.css';
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import MainLog from './Pages/MainLog';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import BuildingList from './Pages/BuildingList';
import NoticeWrite from './Pages/NoticeWrite';
import Layout from './Components/Layout';
import BuildingRegister from './Pages/BuildingRegister';
import ManagerRegister from './Pages/ManagerRegister';
import NoticeView from './Pages/NoticeView';
import PostView from './Pages/PostView';
import NoticeList from './Pages/NoticeList';
import PostList from './Pages/PostList';
import Banner from './Pages/MainBanner';
import ReportList from './Pages/ReportList';
import Qr from './Pages/Qr';
import ResetPw from './Pages/ResetPw';
import ReportView from './Pages/ReportView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainLog/>} exact />
        <Route path="/signup" element={<SignUp />}> </Route>
        <Route path="/main" element={<Main />}> </Route>
        <Route path="/banner" element={<Banner />}> </Route>
        <Route path="/layout" element={<Layout />}> </Route>
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
