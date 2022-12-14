import {React, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';

//react icon
import { BsDropletFill,BsThermometerHalf } from "react-icons/bs";
import { AiFillAlert, AiTwotoneNotification } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FcScatterPlot, FcHighPriority } from "react-icons/fc";


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
    height: 71.5vh;
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
    width: 170px;
    margin:0;
    padding:5px;
    border-bottom: 2px solid  grey;
    cursor: pointer;
    &:hover {
      background-color :  #0F4C75;
      color: white;
    }
  `
/******************************????????????****************************** */
  function GetNoticeData() {
    const [data, setData] = useState([]);
    const facilityNum = localStorage.getItem('facilityNum');

    //?????? ????????? 5?????? ?????????
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/notice/'+ facilityNum + '/main')
        .then((response)=> {
          setData(response.data);
          console.log(response);
      })
    }, []);
    
    //Object????????? ???????????? ????????? ??????
    const notice = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.noticeTitle}</li>
      </ul>
    ));
  
    return notice; 
  }
/******************************??????????????? ??????****************************** */
  function GetPostData() {
    const [data, setData] = useState([]);
    const facilityNum = localStorage.getItem('facilityNum');

    //?????? ????????? ????????? 5?????? ?????????
    
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/content/'+ facilityNum + '/main')
        .then((response)=> {
          setData(response.data);
          console.log(response);                  
      })
    }, []);
    //Object????????? ???????????? ????????? ?????? 
    const post = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.contentTitle}</li>
      </ul>
    ));
  
    return post; 

  
  }

  /******************************?????? ??????****************************** */

  function GetReportData() {
    const [data, setData] = useState([]);
    const facilityNum = localStorage.getItem('facilityNum');
    
    //?????? ????????? 5?????? ?????????
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/report/list/main/'+ facilityNum)
        .then((response)=> {
          setData(response.data);    
      })
    }, []);
   //Object????????? ???????????? ????????? ??????    
    const report = (Object.values(data)).map((item,i) => (
      <ul key = {item.i}>
        <li>{item.reportTitle}</li>
      </ul>
    ));
    return report; 

  }
  
 
function Banner(props) {
  const notice = GetNoticeData();
  const post = GetPostData();
  const report = GetReportData();
  const [data, setData] = useState([]);

  const address = localStorage.getItem('facilityAddress')
    // ???????????? ???????????? ????????? ????????????
    useEffect(() => {
      axios
        .post('http://203.250.32.29:2222/api/ai/firePredict', {
          facilityAddress : address,
      })
        .then((response)=> {
          setData(response.data);
      })
    }, []);

  let navigate = useNavigate();
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager'); localStorage.removeItem('registerName');window.location.reload();}}>?????? ??? ?????? ??????</Menu_ul></Box1>
          <Box2>
            <Title_box>{localStorage.getItem('facilityName')}</Title_box><hr></hr>
            <Content_box>
                <Spo>
                  <Top><Sub_title><AiTwotoneNotification size="50" color='#FFB200'/>????????????</Sub_title><TopButton onClick={()=> {navigate('/notice'); window.location.reload();}}>?????????+</TopButton></Top>  {/* ?????????????????? ?????????????????? ????????? ?????? */}
                  <Sub_content>{notice}</Sub_content>
                </Spo>

                <Spo>
                  <Top><Sub_title><FaComments size="50" color='#3282B8'/>?????????????????????</Sub_title><TopButton onClick={()=> {navigate('/post'); window.location.reload();}}>?????????+</TopButton></Top> {/* ?????????????????? ????????????????????? ????????? ?????? */}
                  <Sub_content>{post}</Sub_content>
                </Spo>

                <Spo>
                  <Top><Sub_title><AiFillAlert size="50" color='red'/>????????????</Sub_title><TopButton onClick={()=> {navigate('/report'); window.location.reload();}}>?????????+</TopButton></Top> {/* ?????????????????? ???????????????????????? ????????? ?????? */}
                  <Sub_content>{report}</Sub_content>
                </Spo>  

                <Spo>
                  <Top><Sub_title><FcScatterPlot size="50"/> AI??? ?????? ?????? ??????</Sub_title><TopButton onClick={()=>{window.location.reload();}}>UPDATE</TopButton></Top>
                  <Sub_licontent>
                      <Today>????????? ?????? ?????????</Today>
                      <Today_content>
                        <Info>
                          <Li_div><BsDropletFill size="60" color= '#ABC9FF'/>?????? {data.humidity}</Li_div>
                          <Li_div><BsThermometerHalf size="60" color='orange'/>??????  {data.temperature}</Li_div>
                        </Info>
                        <Danger>
                          <Li_div><FcHighPriority size="60" color='red'/>????????? {data.riskDegree}</Li_div>
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