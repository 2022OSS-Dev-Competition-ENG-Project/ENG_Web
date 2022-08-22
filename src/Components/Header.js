import React from 'react';
import styled from 'styled-components';

function Header() {
  let Header = styled.div`
      background : white;
      width: 100%;
      height: auto;
      display: flex;
      `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color: white;
        margin: 30px 0px 10px 90px;
        `
  return(
    <>
    <Header>
      <Logo>!ENG?</Logo>
      
    </Header>  
    <hr></hr>
    </>

  );
}

export default Header;