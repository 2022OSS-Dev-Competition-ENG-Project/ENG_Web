import React from 'react';
import styled from 'styled-components';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Header() {

  let navigate = useNavigate();
  let Header = styled.div`
      background : #FAFAFA;
      width: 100%;
      height: 130px;
      display: flex;
      
      `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color:#FAFAFA;
        margin: 80px 0px 10px 390px;
        cursor: pointer;
        `

      let User = styled.button`
        color: black;
        float: right;
        font-size: 20px;
        margin: 100px 390px 10px 0px;
        background-color:#FAFAFA;
        border-style: none;
        font-weight: 100;
      `

    
  return(
    <>
    <Header>
      <Logo>!ENG?</Logo>
      <User onClick={()=> {localStorage.clear(); navigate('/')}} >로그아웃</User>
    </Header>  
    <hr></hr>
    </>

  );
}

export default Header;