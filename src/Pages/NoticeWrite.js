import Write from "../Components/Write";
import Header from "../Components/Header";
import React from "react";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

function NoticeWrite() {
    let Body = styled.div`
    margin:0;
    padding:0;
    width: 100%;
    height: 0vh;
    background-color: pink;
    display: flex;
  `

  let Title_box = styled.h1`
    margin: 150px 170px 0 0;
    font-size: 40px;
    font-weight: 900;
    width: 70vw;
    margin-left: 100px;
    padding: 5px 20px;
    background-color: blue;
`
let Title = styled.div`
  float: left;

`
  return(
    <>
      <Header/>
      <Body>
        <Navigation/>
        <Title_box>공지사항</Title_box>
        <Write/>
      </Body>
      
    </>
  )
}

export default NoticeWrite;