import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';

function Main() {

  let navigate = useNavigate();
  let Menu = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      
    `  
  let Main_button = styled.button`
        width: 550px;
        height: 700px;
        color: black;
        float: right;
        font-size: 20px;
        margin: 30px 90px 10px 0px;
        background-color: #0F4C75;
        border-radius: 30px;
        margin:100px;
        box-shadow: 2px 3px 10px 10px #cac6ce;
        border-style: none;
        color: white;
        font-size: 50px;
        font-weight: 1000;
        `

      
  return(
    <body>
      <Header /> 
      <Menu>
        <Main_button onClick={()=> {navigate('/BuildingList')}}>나의 건물 <br/>리스트 보기</Main_button>
        <Main_button onClick={()=> {navigate('/register/building')}}>관리 건물 <br/>등록하기</Main_button>
      </Menu>
      <Footer />
    </body>
    
  );
}

export default Main;