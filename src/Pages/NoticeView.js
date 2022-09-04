import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import axios from 'axios';
import { useParams } from 'react-router-dom';


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


function GetData(itemI) {
  const [data, setData] = useState({});
  useEffect(()=> {
    axios.get('http://203.250.32.29:2200/api/facility/content/0f797583-f9dd-4ec3-bb59-39d4cf862ed1/155')
    .then((response)=> {
      console.log(response.data);
      setData(response.data);
    })
  },[]);

  const item = (<>
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
            <Content_box><Title><h2>{data.contentTitle}</h2> </Title><Post>{data.contentText}</Post></Content_box>
          </Box2>
        </Body>
        <Footer/>
    </Div>
  
  </>)
  
  return item;
}

function NoticeView() {
  const{itemI} = useParams();
  const item = GetData(itemI);

  return (<>
    <div>
      {item}
    </div>
  </>);
}
export default NoticeView;