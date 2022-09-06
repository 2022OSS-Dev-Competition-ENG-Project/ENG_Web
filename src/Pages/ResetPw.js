import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import {FaKey} from "react-icons/fa";

const Div = styled.div`
background-color: #FAFAFA;
`

  const Box1 = styled.div`
  width: 300px;
  height: auto;
  background-color: #FAFAFA;
  margin: 0 ;
  padding-top:120px
`

const Box2 = styled.div`
  width: 1300px;
  height: 70vh;
  background-color:#FAFAFA;
  margin: 0 ;
  display: flex;
  flex-direction: column;
`
const Title_box = styled.div`
widith: auto;
height: auto;
display: flex;
justify-content: flex-start;
background-color:#FAFAFA;
font-size: 50px;
padding:0;
margin:0 0 0 20px;
    
`
const Content_box=styled.div`
widith: auto;
height: 500px;
background-color: #FAFAFA;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Body = styled.div`
display: flex;
justify-content: center;
margin: 100px 0 0 0;
background-color: #FAFAFA;

`
const Input_box = styled.label`
  display:flex;
  justify-content: center;
  width: 550px;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 20px;
  padding-right: 10px;
`

const Sub_Title = styled.label`
  display:flex;
  justify-content: center;
  width: 550px;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 30px;
  padding-right: 10px;
  font-weight: 1000;

`
const Input = styled.input`
  margin: 0 0 0 10px;
  padding: 10px;
  width: 450px;
  border-radius: 8px;
  border: 3px solid #727272;
  height: 60px;
`
const Button = styled.button`
margin: 10px;
font-size: 20px;
color: white;
background-color: #0F4C75;
`


function ResetPw() {

  let navigate = useNavigate();

  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  
  const managerUuid = localStorage.getItem('managerUuid');

  const goMain = () => {
    navigate('/main');
  };


 const changePw = () => {

    
    console.log(pw1);
    console.log(pw2);

    if(pw1==pw2){
      axios
      .post('http://203.250.32.29:2201/api/manager-service/myPage/changePW/', {
      managerPassword: pw1,
      managerUuid: managerUuid,
      })
      .then(response => {
      // Handle success.
        console.log('변경완료');
        alert(response.data);
        goMain();
      
      })
      .catch(error => {
      // Handle error.
        console.log(error.response);
        
      });


    }
    else if(pw1!=pw2){
      alert('비밀번호와 비밀번호확인을 다시 확인해주세요');
    }


      }
    
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>로그인</Title_box><hr></hr>

          <Content_box>
          <FaKey size="55" color="#0F4C75"/>
            <Sub_Title>
              비밀번호 재설정
            </Sub_Title>
          
            <Input_box>
              <Input type="password" placeholder='새 비밀번호'  value={pw1} onChange={(e)=> {
                setPw1(e.target.value);
              }}></Input>
            </Input_box>

              <Input_box >
              <Input  type="password"placeholder='새 비밀번호 확인'  value={pw2} onChange={(e)=> {
                 setPw2(e.target.value);
              }}></Input>
            </Input_box>  

            
            <Button onClick={()=> {
              changePw();
            }}> 등록하기</Button> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>   
    
  );
}

export default ResetPw;