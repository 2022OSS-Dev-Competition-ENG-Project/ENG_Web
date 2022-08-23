import React from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout() {
  let Div = styled.div`
  background-color: #FAFAFA;
`

  let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;
`
  let Box1 = styled.div`
  width: 300px;
  height: auto;
  background-color: #FAFAFA;
  margin: 0 ;
  padding-top:120px
  `

  let Box2 = styled.div`
  width: 1300px;
  height: 70vh;
  background-color:#FAFAFA;
  margin: 0 ;
  display: flex;
  flex-direction: column;
  `
  let Title_box= styled.div`
  widith: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  background-color:#FAFAFA;
  font-size: 50px;
  padding:0;
  margin:0 0 0 20px;
  `
  let Content_box=styled.div`
  widith: auto;
  height: auto;
  background-color: #FAFAFA;
  display:flex;
  align-items: flex-start;
  justify-content: center;
  `
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>제목</Title_box><hr></hr><Content_box>Content</Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
      
    </>
  );
}

export default Layout;