import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';



let Div = styled.div`
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
  let Title_box = styled.div`
  widith: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  background-color:#FAFAFA;
  font-size: 40px;
  padding:0;
  margin:0 0 0 20px;
      
  `
  let Content_box=styled.div`
  widith: auto;
  height: auto;
  background-color: #FAFAFA;
  display:flex;
  flex-wrap: wrap;
  justify-content : center;

`

  let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;
  `

  let Spo = styled.div`
    width: 600px;
    height: 320px;
    background-color: #FAFAFA;
    margin : 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `

  let Top = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    background-color: #FAFAFA;
  `

  let Sub_title = styled.div`
   background-color:#FAFAFA;
   padding: 0 20px;
   text-align: left;
   width: auto;
   height: 45px;
   font-size: 30px;
   border-bottom: 2px solid;
  `

  

  let TopButton =  styled.button`
    width: 100;
    height:45px;
    border-style: none;
    font-size:20px;
    background-color:#FAFAFA;
  `

  let Sub_content = styled.div`
    padding: 20px;
    background-color:  #EDEDED;
    text-align:left;
    border-radius: 10px;
    margin-top: 10px;
    height: 300px;
  `

  function GetNoticeData() {
    const [data, setData] = useState([]);

    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/247f9839-53a4-426c-994d-878f1c05d47b/content/1/main')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const notice = (Object.values(data)).map((item) => (
      <ul key = {item.contentTitle}>
        <li>{item.contentTitle}</li>
      </ul>
    ));
  
    return notice; 

  
  }

  function GetPostData() {
    const [data, setData] = useState([]);
    let [address, setAddress] = useState();
      setAddress = localStorage.getItem('facilityAddress');
      console.log(address);
    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/247f9839-53a4-426c-994d-878f1c05d47b/content/0/main')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
     
    const post = (Object.values(data)).map((item) => (
      <ul key = {item.contentTitle}>
        <li>{item.contentTitle}</li>
        <li>{address}</li>
      </ul>
    ));
  
    return post; 

  
  }

  
  function GetReportData() {
    const [data, setData] = useState([]);

    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/report/spo/247f9839-53a4-426c-994d-878f1c05d47b/')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const report = (Object.values(data)).map((item) => (
      <ul key = {item.reportContentTitle}>
        <li>{item.reportContentTitle}</li>
      </ul>
    ));
  
    return report; 

  
  }

  {/*
  function GetAitData() {
    const [data, setData] = useState([]);
    const [address, setAdress] = useState();
    address = localStorage.getItem('facilityAddress')
    
    useEffect(() => {
      axios
        .post('http://203.250.32.29:2222/api/ai/firePredict', {
          
          
          facilityAddress : address,
          
      })
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
     
     
    const ai = (Object.values(data)).map((item) => (
      <ul key = {item.reportContentTitle}>
        <li>{item.humidity}</li>
        <li>{item.riskDegree}</li>
        <li>{item.temperature}</li>
      </ul>
    ));
  
    return ai; 

  
  }
 */}

function Banner() {
  const notice = GetNoticeData();
  const post = GetPostData();
  const report = GetReportData();
  {/*const ai = GetAitData();*/}


  let navigate = useNavigate();
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>대구가톨릭대학교</Title_box><hr></hr>
            <Content_box>
                <Spo><Top><Sub_title>공지사항</Sub_title><TopButton onClick={()=> {navigate('/notice')}}>더보기+</TopButton></Top><Sub_content>{notice}</Sub_content></Spo>
                <Spo><Top><Sub_title>게시물</Sub_title><TopButton onClick={()=> {navigate('/post')}}>더보기+</TopButton></Top><Sub_content>{post}</Sub_content></Spo>
                <Spo><Top><Sub_title>신고현황</Sub_title><TopButton onClick={()=> {navigate('/report')}}>더보기+</TopButton></Top><Sub_content>{report}</Sub_content></Spo>  
                <Spo><Top><Sub_title>오늘 주의해야할 사고</Sub_title><TopButton>UPDATE</TopButton></Top><Sub_content></Sub_content></Spo>
            </Content_box>
           </Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default Banner;