import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import axios from 'axios';


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
    height: 800px;
    background-color: #FAFAFA;
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

  let Comment_box= styled.div`
    widith: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color:#FAFAFA;
    padding:0;
  `
  let Comment_title= styled.div`
    font-size: 25px;
  `

  let Comment = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #FAFAFA;
  `
  let Comment_user = styled.div`
    display:flex;
    justify-content: flex-start;
    font-size:20px;
    width: auto;
    background-color: #FAFAFA;
    opacity: 100%;
  `
  let Comment_buttonbox = styled.div`
  `
  let Comment_button = styled.button`
    margin: 5px;
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
    height: 500px;
    background-color:#FAFAFA;
  `
  let Hr = styled.hr`
    margin: 0;
    padding: 0;
  `
  let Upload_box = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    background-color: #FAFAFA;
  `
  let Master = styled.div`
    font-size:20px;
    width: 100px;
    background-color: #FAFAFA;
    padding: 0;
  `
  let Upload = styled.input`
    width:1080px;
  `
function PostView() {
  const [data, setData] = useState([]);

    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/facility/content/32')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);



  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>
              <Box>게시물</Box>
              <Button_box>
                <Button>수정</Button>
                <Button>삭제</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box><Title><h2>제목:</h2> </Title><Post>내용</Post></Content_box>
            <Hr></Hr>

            <Comment_box>
              <Comment_title>댓글</Comment_title>
              <Hr></Hr>
              <Comment>
                <Comment_user>최보현 - 안녕하세요</Comment_user>
                <Comment_buttonbox>
                  <Comment_button>수정</Comment_button>
                  <Comment_button>삭제</Comment_button>
                </Comment_buttonbox>
              </Comment>
              <Hr></Hr>
              <Upload_box>
                <Master>조승현 - </Master>
                <Upload></Upload>
                <Comment_button>등록</Comment_button>
              </Upload_box>
            </Comment_box>

          </Box2>
        </Body>
        <Footer/>
    </Div>
    </>
  );
}

export default PostView;