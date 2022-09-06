import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
/******************************공지배너****************************** */
  function GetNoticeData() {
    const [data, setData] = useState([]);
    const useFacility = localStorage.getItem('useFacility');

    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/'+ useFacility + '/content/1/main')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const notice = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.contentTitle}</li>
      </ul>
    ));
  
    return notice; 

  
  }
/******************************게시물 배너****************************** */
  function GetPostData() {
    const [data, setData] = useState([]);
    const useFacility = localStorage.getItem('useFacility');
    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/'+ useFacility + '/content/0/main')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          console.log(response.status);
          
          
      })
    }, []);
     
    const post = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.contentTitle}</li>
      </ul>
    ));
  
    return post; 

  
  }

  /******************************신고 배너****************************** */

  function GetReportData() {
    const [data, setData] = useState([]);
    const useFacility = localStorage.getItem('useFacility');
    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/report/spo/' +  useFacility)
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const report = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.reportContentTitle}</li>
      </ul>
    ));
  
    return report; 

  
  }
  

    /******************************AI****************************** */
 

function Banner(props) {
  const notice = GetNoticeData();
  const post = GetPostData();
  const report = GetReportData();
  const [data, setData] = useState([]);

  const address = localStorage.getItem('facilityAddress')
    
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

  let navigate = useNavigate();
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>{localStorage.getItem('facilityName')}</Title_box><hr></hr>
            <Content_box>
                <Spo><Top><Sub_title>공지사항</Sub_title><TopButton onClick={()=> {navigate('/notice')}}>더보기+</TopButton></Top><Sub_content>{notice}</Sub_content></Spo>
                <Spo><Top><Sub_title>게시물</Sub_title><TopButton onClick={()=> {navigate('/post')}}>더보기+</TopButton></Top><Sub_content>{post}</Sub_content></Spo>
                <Spo><Top><Sub_title>신고현황</Sub_title><TopButton onClick={()=> {navigate('/report')}}>더보기+</TopButton></Top><Sub_content>{report}</Sub_content></Spo>  
                <Spo><Top><Sub_title>오늘 주의해야할 사고</Sub_title><TopButton>UPDATE</TopButton></Top>
                <Sub_content>
                  <ul>
                    <li>습도 : {data.humidity}</li>
                    <li>위험도 : {data.riskDegree}</li>
                    <li>온도 : {data.temperature}</li>
                  </ul>
                </Sub_content>
                </Spo>
            </Content_box>
           </Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default Banner;