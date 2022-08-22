import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import FindID from './FindID';
import FindPW from './FindPW';
import axios from 'axios';
import styled from 'styled-components';

function MainLog() {
  

  let navigate = useNavigate();
  const [findIDOn, setFindIDModalOn] = React.useState(false);
  const [findPWOn, setFindPWModalOn] = React.useState(false);
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  let Body = styled.div`
      background : #E4E4E4;
      width: 100vw;
      height: 100vh;
      `
    
    let Header = styled.div`
      height: 100vh;
      width: 53vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ABC9FF;
      margin: 0;
      padding: 0;
      float: left;
    `
    
    let Logobox = styled.div`
      width: 200px;
      background-color: rgba(1, 156, 22, 0);
    `

    let Logo = styled.h1`
      color: white;
      font-size: 50px;
      margin: 0;
      padding: 0;
    `

    let Logo_sub = styled.h3`
      font-weight: 700;
    `

    let Side = styled.div`
      width: 450px;
      float: right;
      background-color: white;
      border-radius: 20px;
      margin-right: 200px ;
      padding: 20px;
      margin-top: 300px;
    `

    let Login_button = styled.button`
      width: 100%;
      margin: 3px;
      border-radius: 5px;
      border-style: none;
    `

    let Button = styled.button`
      background-color:#F5F5F5;
      margin: 0 10px 0 10px;
      border-radius: 5px;
      padding: 5px 10px;
      border-style: none;
      box-shadow: 2px 3px 5px 0px #cac6ce;
    `

    let Hr = styled.hr`
      padding: 0;
      margin: 10px;
      width: 100%;
    `
    return (
      <>
      <Body>
        <Header>
          <Logobox>
            <Logo>!ENG?</Logo><Logo_sub>for Manager</Logo_sub>
          </Logobox>
        </Header>
        <Side>
          <Form>
              <h3>Login</h3><hr></hr>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="email" placeholder="123456@abcd.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
              </Form.Group>

              <Login_button type="submit">
                LOGIN
              </Login_button>
              <Hr></Hr>
              <Button onClick={()=> setFindIDModalOn(true)}>아이디 찾기</Button>
                <FindID
                  show = {findIDOn}
                  onHide={() => setFindIDModalOn(false)}
                />

              <Button onClick={()=> setFindPWModalOn(true)}>비밀번호 찾기</Button>
                <FindPW
                  show = {findPWOn}
                  onHide={() => setFindPWModalOn(false)}
                />

              <Button onClick={()=> {navigate('/signup')}}>회원가입</Button>
          </Form>
        </Side>
      </Body>
      </>
    )
  }


export default MainLog;
