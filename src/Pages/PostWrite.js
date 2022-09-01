import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Write from "../Components/Write";
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `

  let Register_button = styled.button`
    background-color: #0F4C75;
    color: white;
    border-radius: 5px;
    width: 90px;
    height: 40px;
  `

function PostWrite() {
  

  const [content, setContent] = useState({
    title : '',
    content: ''
  })

  

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    })
    console.log(content);
  };
  

  const [viewContent, setViewContent] = useState([]);

  axios
      .post('http://203.250.32.29:2201/api/facility/content/register', {
   
      })
      .then(response => {
        // Handle success.
        console.log('성공');
        console.log(response.data)
        alert('회원님의 아이디는 '+ (response.data) + '입니다');
        
      })
      .catch(error => {
        // Handle error.
        console.log('로그인 실패', error.response);
        alert(error.response.data);
      });

  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>게시물</Title_box><hr></hr><Content_box><Write/><Register_button onClick={() => {
        setViewContent(viewContent.concat({...content}));
      }}>등록하기</Register_button></Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>
  );
}

export default PostWrite;