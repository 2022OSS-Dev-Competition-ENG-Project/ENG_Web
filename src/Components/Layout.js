import React from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout() {

  let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0 0 0;
  background-color: white;
`
  let Box1 = styled.div`
    width: 300px;
    height: auto;
    background-color:black;
    margin: 0 10px;
  `

  let Box2 = styled.div`
    width: 1300px;
    height: 70vh;
    background-color:rgba(255, 255, 255, 0);
    margin: 0 10px;
    display: flex;
    flex-direction: column;
`
  let Title_box= styled.div`
    widith: auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    background-color: purple;
    font-size: 50px;
    padding:0;
    margin:0 0 0 20px;
  `
  let Content_box=styled.div`
    widith: auto;
    height: 300px;
    background-color: #43cc6c;
    font-size: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
  `
  return(
    <>
      <Header/>
      <Body>
        <Box1><Navigation/></Box1>
        <Box2><Title_box>공지사항</Title_box><hr></hr><Content_box>Content</Content_box></Box2>
      </Body>
      <Footer/>
    </>
  );
}

export default Layout;