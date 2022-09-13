import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import Navigation from "../../Components/Layout/Navigation";
import axios from 'axios';
import { useParams, useNavigate, Navigate } from 'react-router-dom';


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
  flex-direction: column;
`
let Hr = styled.hr`
  margin: 0;
  padding: 0;
`

let Menu_ul = styled.ul`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 150px;
  margin:0;
  padding:0;
  border-bottom: 5px solid #0F4C75 ;
  margin:5px;
  cursor: pointer;
`

let Img = styled.img`
  width: 400px;
`

function GetData(itemI) {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  

  useEffect(()=> {
    axios.get('http://203.250.32.29:2200/api/report/' + itemI)
    .then((response)=> {
      console.log(response.data);
      setData(response.data);
    })
  },[]);

  const item = (<>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>
          <Box2>
            <Title_box>
              <Box>신고현황</Box>
              <Button_box>
                <Button type="button" onClick={()=> {
                    axios
                     .get('http://203.250.32.29:2200/api/report/'+ itemI +'/1')
                     .then((response)=> {
                        alert("처리완료");
                        navigate('/report');
                     })
                     .catch(error => {
                      alert('처리실패')
                     })
                }}>처리</Button>
                <Button type="button" onClick={()=> {
                    axios
                     .get('http://203.250.32.29:2200/api/report/'+ itemI +'/2')
                     .then((response)=> {
                        alert("반려완료");
                        navigate('/report');
                     })
                     .catch(error => {
                      alert('반려실패')
                     })
                }}>반려</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box><Title><h2>제목: {data.reportTitle}</h2> </Title><Post>{data.reportText}<Img src={data.reportImg}></Img></Post></Content_box>
          </Box2>
        </Body>
        <Footer/>
    </Div>
  
  </>)
  
  return item;
}

function ReportView() {
  
  const{itemI} = useParams();
  const item = GetData(itemI);

  return (<>
    <div>
      {item}
    </div>
  </>);
}
export default ReportView;