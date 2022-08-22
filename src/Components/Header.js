import React from 'react';
import styled from 'styled-components';

function Header() {
  let Header = styled.div`
      background : white;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color: white;
        margin: 30px 0px 10px 90px;
        `

      let User = styled.button`
        color: black;
        float: right;
        font-size: 20px;
        margin: 30px 90px 10px 0px;
      `
  return(
    <>
    <Header>
      <Logo>!ENG?</Logo>
      <User>로그아웃</User>
    </Header>  
    <hr></hr>
    </>

  );
}

export default Header;