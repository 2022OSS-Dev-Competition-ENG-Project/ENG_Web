import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsDropletFill,BsThermometerHalf } from "react-icons/bs";
import { AiFillAlert, AiTwotoneNotification } from "react-icons/ai";
import { FaComments, FaPen } from "react-icons/fa";
import { FcAssistant, FcScatterPlot, FcHighPriority } from "react-icons/fc";


let Div = styled.div`
  background-color: #FAFAFA;
`
  
    let Box1 = styled.div`
    width: 200px;
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
   padding: 0 10px;
   text-align: left;
   width: auto;
   height: 45px;
   font-size: 30px;
   margin-left: 20px;
   font-weight: 600;
  `

  

  let TopButton =  styled.button`
    width: 100;
    height:45px;
    border-style: none;
    font-size:20px;
    background-color:#FAFAFA;
    margin-right: 20px;
  `

  let Sub_content = styled.div`
    padding: 25px;
    background-color:  #F6F6F6;
    text-align:left;
    justify-content: center;
    border-top: solid 2px #B7C4CF;
    border-radius: 10px;
    margin-top: 10px;
    height: 300px;
    align-items: center;
    font-size : 20px;
    font-weight: 500;
    overflow: hidden;
  `

  let ReporContent = styled.div`
    padding: 20px;
    background-color: #F9F9F9;
    border-radius: 50px;
    border: solid 4px #dd3333;
    margin-top: 10px;
    height: 300px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
  let Sub_licontent = styled.div`
    padding: 20px;
    background-color:  #F6F6F6;
    border-radius: 10px;
    border-top: solid 2px #B7C4CF;
    margin-top: 10px;
    height: 300px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
  `
  let Today = styled.div`
    background-color:  #F6F6F6;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: flex-start;
    padding-left: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
  `
  let Today_content =  styled.div`
    
    border-radius: 10px;
    height: 150px;
    font-size: 30px;
    display:flex;
  `
  let Info = styled.div`
  background-color:   #F6F6F6;
  width:300px;
  display:flex;
  height: 160px;
  flex-direction: column;
  align-items: flex-start;
  border-right: 2px solid grey;
  `
  let Danger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:   #F6F6F6;
  width:300px;
  `
  let Li_div = styled.div`
    margin: 5px;
    
  `

  let Menu_ul = styled.ul`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 130px;
  margin:0;
  padding:5px;
  border-bottom: 2px solid  grey;
  cursor: pointer;
  &:hover {
    background-color :  #0F4C75;
    color: white;
  }
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
          console.log('공지성공');
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
          console.log('게시물성공');
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
        .get('http://203.250.32.29:2200/api/report/list/mg/lt/'+ useFacility)
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const report = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.reportTitle}</li>
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
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>
          <Box2>
            <Title_box>{localStorage.getItem('facilityName')}</Title_box><hr></hr>
            <Content_box>
                <Spo><Top><Sub_title><AiTwotoneNotification size="50" color='#FFB200'/>공지사항</Sub_title><TopButton onClick={()=> {navigate('/notice')}}>더보기+</TopButton></Top><Sub_content>{notice}</Sub_content></Spo>
                <Spo><Top><Sub_title><FaComments size="50" color='#3282B8'/>안전소통게시판</Sub_title><TopButton onClick={()=> {navigate('/post')}}>더보기+</TopButton></Top><Sub_content>{post}</Sub_content></Spo>
                <Spo><Top><Sub_title><AiFillAlert size="50" color='red'/>신고현황</Sub_title><TopButton onClick={()=> {navigate('/report')}}>더보기+</TopButton></Top><Sub_content>{report}</Sub_content></Spo>  
                <Spo><Top><Sub_title><FcScatterPlot size="50"/> AI를 통한 화재 예측</Sub_title><TopButton>UPDATE</TopButton></Top>
                <Sub_licontent>

                    <Today>오늘의 화재 위험도</Today>
                    <Today_content>
                      <Info>
                        <Li_div><BsDropletFill size="60" color= '#ABC9FF'/>습도 {data.humidity}</Li_div>
                        <Li_div><BsThermometerHalf size="60" color='orange'/>온도  {data.temperature}</Li_div>
                      </Info>
                      <Danger>
                        <Li_div><FcHighPriority size="60" color='red'/>위험도 {data.riskDegree}</Li_div>
                      </Danger>
                    </Today_content>
                    
                    
                    
                </Sub_licontent>
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