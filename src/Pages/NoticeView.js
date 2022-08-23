import React from "react";
import styled from 'styled-components';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import View from "../Components/View";

function NoticeView() {
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
    justify-content: space-between;
    background-color:#FAFAFA;
    font-size: 50px;
    padding:0;
    margin:0 0 0 20px;
  `
  let Box = styled.div`
    margin: 0;
    padding: 0;
  `
  let Button_box = styled.div`
    margin: 0;
    padding: 0;
` 
  let Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
  color: black;
  background-color: #C6C6C6;
  border-radius:  5px;
  border-style:none;
`
  let Content_box=styled.div`
    widith: auto;
    height: auto;
    background-color: #FAFAFA;
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 5px 0 0 20px;
  `
  let Title =  styled.div`
    font-size: 25px;
    background-color:#FAFAFA;
    display:flex;
    justify-content: flex-start;
  `
  let Post = styled.div`
    font-size: 25px;
    background-color:#FAFAFA;
  `
  let Hr = styled.hr`
    margin: 0;
    padding: 0;
  `

  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>
              <Box>공지사항</Box>
              <Button_box>
                <Button>수정</Button>
                <Button>삭제</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box><Title><h2>제목:</h2> </Title><Post>내용</Post></Content_box>
          </Box2>
        </Body>
        <Footer/>
    </Div>
    </>
  );
}

export default NoticeView;