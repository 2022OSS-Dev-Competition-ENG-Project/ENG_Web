import React, { useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import FindID from './FindID';
import FindPW from './FindPW';

function SignUp() {
    let navigate = useNavigate();

    const [findIDOn, setFindIDModalOn] = React.useState(false);
    const [findPWOn, setFindPWModalOn] = React.useState(false);

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
      flex-direction: column;
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
        display: flex;
        justify-content: space-between;
      `

      let Input = styled.input`
        border-style: none;
        background : #F5F5F5;
        border: 1px solid #727273;
        border-radius: 5px;
        width: 250px;
      `

      let Formbox = styled.div`
        width: 400px;
        
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
    let [id, setId] = useState('');
    let [pwd, setPwd] = useState('');
    let [name, setName] = useState('');
    let [nickname, setNickname] = useState('');
    let [emailcheck, setEmailcheck] = useState('');
    let [pwdcheck, setPwdcheck] = useState('');
    let [birth, setBirth] = useState('');
{/* 
   axios.get("http://localhost:8080/api/user-service/register", {
      id: id,
      pwd: pwd,
      name: name,
      nickname: nickname,
      birth: birth
    }) .then(function(response) {
        if(response.data == 201) {
         setPopup ({
            open: true,
            title: "Confirm",
            message: "Join Success!", 
            callback: function(){
              navigate("/");
            }
          }); 
        }  else {
            let message = response.data.message;
            if(response.data.code == 409){
              message = "User ID is duplicated. Please enter a different User ID. "
            }
           {/* setPopup({
              open: true,
              title: "Error",
              message: message
            }); 
          }
      }).catch(function (error) {
        console.log(error);

      })

    */}

    return (
      <Body>
        <Container>
          <Header>
            <img alt="signup" src={process.env.PUBLIC_URL + '/img/signup.png'}></img>
          </Header>
          <Box>
          <H1>회원가입</H1>
            <Formbox>
              
              <hr></hr>
              <Group>
                  <label>이름</label>
                  <Input type="text" value={name}/>
                </Group><br/>

                <Group>
                  <label>닉네임</label>
                  <Input type="text" value={nickname} />
                </Group><br/>

                <Group>
                  <label>이메일</label>
                  <Input type="email" value={id}/>
                  
                </Group><br/>
                
                <Group>
                
                  <Input type="text"  value={emailcheck}/>
                  <button>인증하기</button>
                </Group><br/>

                <Group>
                  <label>비밀번호</label>
                  <Input type="password" value={pwd}/>
                </Group><br/>

                <Group>
                  <label>비밀번호 확인</label>
                  <Input type="password" value={pwdcheck}/>
                </Group><br/>

                <Group>
                  <label>생년월일</label>
                  <Input type="date" value={birth}/>
                </Group><br/>
               <hr></hr> 
               <Signup_button type="submit">
                가입하기
               </Signup_button>
              <hr></hr>
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

                <Button onClick={()=> {navigate('/')}}>로그인</Button>
            </Formbox>
          </Box>

        </Container> 
      </Body>
    )
  }


export default SignUp;