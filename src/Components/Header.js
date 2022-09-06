import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Header() {

  let navigate = useNavigate();
  let Header = styled.div`
      background : #FAFAFA;
      width: 100%;
      height: 130px;
      display: flex;
      justify-content: space-between;
      `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color:#FAFAFA;
        margin: 80px 0px 10px 390px;
        cursor: pointer;
        `

      let UserBox = styled.div`
        background-color: #FAFAFA;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-right: 390px;
      `

      let Button = styled.button`
        color: black;
        float: right;
        font-size: 20px;
        height: 50px;
        background-color:  #FAFAFA;
        border-style: none;
        font-weight: 100;
      `
  const  user = localStorage.getItem('managerName');
    
  return(
    <>
    <Header>
      <Logo  onClick={()=> { navigate('/main')}}>!ENG?</Logo>
      <UserBox>
        <Button onClick={()=> navigate('/mypage')}>{user}</Button>
        <Button onClick={()=> {localStorage.clear(); navigate('/')}} >로그아웃</Button>
      </UserBox>
      
    </Header>  
    <hr></hr>
    </>

  );
}

export default Header;