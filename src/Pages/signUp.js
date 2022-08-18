import React from 'react';
import {Form, Button} from 'react-bootstrap';
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
      width: 600px;
      height: auto;
      padding: 10px;
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
    return (
      <Body>
        <Container>
          <Header>
            <img alt="signup" src={process.env.PUBLIC_URL + '/img/signup.png'}></img>
          </Header>
          <Box>
            <Form>
              <H1>회원가입</H1>
              <hr></hr>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNickname">
                  <Form.Label>닉네임</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>이메일</Form.Label>
                  <Form.Control type="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPW">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control type="password"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPW">
                  <Form.Label>비밀번호 확인</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>프로필 사진</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBirth">
                  <Form.Label>생년월일</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
               <hr></hr> 
               <button className="signin" type="submit">
                가입하기
               </button>
              <hr></hr>
                <button onClick={()=> {navigate('/findid')}}>아이디 찾기</button>
                <button onClick={()=> {navigate('/findpw')}}>비밀번호 찾기</button>
                <button onClick={()=> {navigate('/')}}>로그인</button>
            </Form>
          </Box>

        </Container> 
      </Body>
    )
  }


export default SignUp;