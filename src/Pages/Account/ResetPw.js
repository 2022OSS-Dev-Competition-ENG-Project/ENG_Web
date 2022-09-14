import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import {FaKey} from "react-icons/fa";


// styled-componet
const Div = styled.div`
  background-color: #FAFAFA;
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;

`
const Box1 = styled.div`
  width: 200px;
  height: auto;
  background-color: #FAFAFA;
  margin: 0 ;
  padding-top:120px
`
const Box2 = styled.div`
  width: 1300px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color:#FAFAFA;
  margin: 0 ;
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
const Input_box = styled.label`
  width: 550px;
  height: auto;
  display:flex;
  justify-content: center;
  background-color:#FAFAFA;
  font-size: 20px;
  margin: 5px;
  padding-right: 10px;
`
const Sub_Title = styled.label`
  display:flex;
  justify-content: center;
  width: 550px;
  height: auto;
  background-color:#FAFAFA;
  font-size: 30px;
  font-weight: 1000;
  margin: 5px;
  padding-right: 10px;
`
const Input = styled.input`
  width: 450px;
  height: 60px;
  margin: 0 0 0 10px;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid #727272;
`
const Button = styled.button`
  background-color: #0F4C75;
  margin: 10px;
  font-size: 20px;
  color: white;
`

function ResetPw() {

  let navigate = useNavigate();

  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  
  const managerUuid = localStorage.getItem('managerUuid');

  const goMain = () => {      //메인으로 가는 함수
    navigate('/main');
  };

//비밀번호 재설정 함수
 const changePw = () => {

 /************ axios로 비밀번호과 UUID 서버로 Post ************/

    if(pw1==pw2){  //새로운 비밀번호와 비밀번호 확인 같을시 통신
      axios
      .post('http://203.250.32.29:2201/api/manager-service/myPage/changePW', {
      managerPassword: pw1,
      managerUuid: managerUuid,
      })
      .then(response => {
      // 서버통신 성공시
        console.log('변경완료');
        alert(response.data);
        goMain();
      
      })
      .catch(error => {
      //서버통신 실패시
        console.log(error.response);
      });


    }
    else if(pw1!=pw2){ //새로운 비밀번호와 새로운 비밀전호 확인 값이 다른 경우
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
              <Input type="password" placeholder='새 비밀번호'  value={pw1} onChange={(e)=> {      //onChange 함수를 통해 입력값 변경
                setPw1(e.target.value);
              }}></Input>
            </Input_box>

              <Input_box >
              <Input  type="password"placeholder='새 비밀번호 확인'  value={pw2} onChange={(e)=> { //onChange 함수를 통해 입력값 변경
                 setPw2(e.target.value);
              }}></Input>
            </Input_box>  
            
            <Button onClick={()=> {        //버튼클릭시 changePw()함수 실행
              changePw();
            }}> 변경하기</Button> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>   
    
  );
}

export default ResetPw;