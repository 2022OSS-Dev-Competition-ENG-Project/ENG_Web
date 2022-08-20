import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import styles from "../style/mainLog.module.css";

function SignUp() {
    let navigate = useNavigate();
    let Body = styled.div`
      background : #B983FF;
      width: 100vw;
      height: 100vh;
      `

      let Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      `

      let Header = styled.div`
        height: 100vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:  #B983FF;
        margin: 0;
        padding: 0;
      `

      let Box = styled.div`
      background : white;
      width:500px;
      height: auto;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      `
      
      let H1 = styled.h1`
      color: black;
      font-size: 35px;
      margin: 0;
      padding: 0;
      `

      let Group = styled.div`
        margin: 1px;
        padding: 0;
      `

      let Input = styled.input`
        border-style: none;
        background : #F5F5F5;
        float: right;
        border: 1px solid #727273;
        border-radius: 5px;
      `

      let Formbox = styled.div`
        width: 500px
      `
    return (
      <Body>
        <Container>
          <Header>
            <img alt="signup" src={process.env.PUBLIC_URL + '/img/signup.png'}></img>
          </Header>
          <Box>
            <Formbox>
              <H1>회원가입</H1>
              <hr></hr>
              <Group controlId="formBasicName">
                  <label>이름</label>
                  <Input type="text"/>
                </Group><br/>

                <Group controlId="formBasicNickname">
                  <label>닉네임</label>
                  <Input type="text" />
                </Group><br/>

                <Group controlId="formBasicEmail">
                  <label>이메일</label>
                  <Input type="email"/>
                </Group><br/>

                <Group controlId="formBasicPW">
                  <label>비밀번호</label>
                  <Input type="password"/>
                </Group><br/>

                <Group controlId="formBasicConfirmPW">
                  <label>비밀번호 확인</label>
                  <Input type="password" />
                </Group><br/>

                <Group controlId="formFile">
                  <label>프로필 사진</label>
                  <Input type="file" />
                </Group><br/>

                <Group controlId="formBasicBirth">
                  <label>생년월일</label>
                  <Input type="date" />
                </Group><br/>
               <hr></hr> 
               <button className="signin" type="submit">
                가입하기
               </button>
              <hr></hr>
                <button onClick={()=> {navigate('/findid')}}>아이디 찾기</button>
                <button onClick={()=> {navigate('/findpw')}}>비밀번호 찾기</button>
                <button onClick={()=> {navigate('/')}}>로그인</button>
            </Formbox>
          </Box>

        </Container> 
      </Body>
    )
  }


export default SignUp;