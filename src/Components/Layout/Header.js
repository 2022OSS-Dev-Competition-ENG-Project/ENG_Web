import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Header() {

  let navigate = useNavigate();
  let Header = styled.div`
      background : #FAFAFA;
      width: 100%;
      height: 11vh;
      display: flex;
      justify-content: space-between;
      `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color:#FAFAFA;
        margin: 5vh 0 0 17vw;
        cursor: pointer;
        `

      let UserBox = styled.div`
        background-color: #FAFAFA;
        display: flex;
        height: 50px;
        margin: 6vh 17vw 0 0 ;
      `

      let Button = styled.button`
        color: black;
        font-size: 20px;
        background-color: #FAFAFA;
        border-style: none;
        font-weight: 100;
      `

      let Hr = styled.hr`
        margin: 0;
        padding: 0;
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
    <Hr></Hr>
    </>

  );
}

export default Header;