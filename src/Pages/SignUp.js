import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';

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
      let Signup_button = styled.button`
        width: 100%;
        margin: 3px;
        border-radius: 5px;
        border-style: none;
        height: 30px ; 
      `

      let Button = styled.button`
        background-color:#F5F5F5;
        margin: 0 10px 0 10px;
        border-radius: 5px;
        padding: 5px 10px;
        border-style: none;
        box-shadow: 2px 3px 5px 0px #cac6ce;
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
               <Signup_button type="submit">
                가입하기
               </Signup_button>
              <hr></hr>
                <Button onClick={()=> {navigate('/findid')}}>아이디 찾기</Button>
                <Button onClick={()=> {navigate('/findpw')}}>비밀번호 찾기</Button>
                <Button onClick={()=> {navigate('/')}}>로그인</Button>
            </Formbox>
          </Box>

        </Container> 
      </Body>
    )
  }


export default SignUp;