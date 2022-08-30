import React, { useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import FindID from './FindID';
import FindPW from './FindPW';
import e from 'cors';

const Body = styled.div`
        background : #B983FF;
        width: 100vw;
        height: 100vh;
        `

      const Container = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      `

      const Header = styled.div`
        height: 100vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:  #B983FF;
        margin: 0;
        padding: 0;
      `

      const Box = styled.div`
      background : white;
      width:600px;
      height: auto;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      `
      
      const H1 = styled.h1`
      color: black;
      font-size: 35px;
      margin: 0;
      padding: 0;
      `

      const Group = styled.div`
        margin: 1px;
        padding: 0;
        display: flex;
        justify-content: space-between;
      `

      const Input = styled.input`
        border-style: none;
        background : #F5F5F5;
        border: 1px solid #727273;
        border-radius: 5px;
        width: 250px;
        padding: 2px;
      `

      const Formbox = styled.div`
        width: 500px;
        
      `
      const Signup_button = styled.button`
        width: 100%;
        margin: 3px;
        border-radius: 5px;
        border-style: none;
        height: 30px ; 
      `

      const Button = styled.button`
        background-color:#F5F5F5;
        margin: 0 10px 0 10px;
        border-radius: 5px;
        padding: 5px 10px;
        border-style: none;
        box-shadow: 2px 3px 5px 0px #cac6ce;
    `


function SignUp() {
    let navigate = useNavigate();

    const [findIDOn, setFindIDModalOn] = React.useState(false);
    const [findPWOn, setFindPWModalOn] = React.useState(false);

      
    const [email, setEmail] = useState('');

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [emailcheck, setEmailcheck] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdcheck, setPwdcheck] = useState('');
    const [phonenum, setPhonenum] = useState('');

    const [actEmailCheck, setActEmailCheck] = useState(false);
    let [SignupButton, setSignupButton] = useState(true);

    function changeButton() {
      name.length >= 1 && phonenum.length == 11 && pwd == pwdcheck && pwd.length >= 1 && pwdcheck.length >= 1 ? setSignupButton(false) : setSignupButton(true);
    }

/***************회원가입버튼******************** */
    const register = () => {

      console.log(email);
      console.log(pwd);
      console.log(name);
      console.log(nickname);
      console.log(emailcheck);
      console.log(pwdcheck);
      console.log(phonenum);
      axios
      .post('http://203.250.32.29:2201/api/manager-service/signup', {
        userEmail: email,
        userPassword: pwd,
        userName: name,
        userNickname: nickname,
        userPhoneNum: phonenum,
      })
      .then(response => {
        // Handle success.
        console.log('회원가입 완료');
        alert('회원가입완료되었습니다');
        goToMain();
        
      })
      .catch(error => {
        // Handle error.
        console.log('회원가입 실패', error.response);
        alert('회원가입 조건을 다시 확인해주세요');
      });
   }

   const goToMain = () => {
    navigate('/');
   };

   /***************이메일 중복확인*********************/

   const emailCheck = () => {
    
    console.log(email);

//203.250.32.29
    axios
    .get('http://203.250.32.29:2201/api/manager-service/register/check/email/' + email , {
      userEmail: email,
    })
    .then(response => {
      // Handle success.
      console.log('사용가능한 이메일');
      alert('사용가능한 이메일입니다');
      
    })
    .catch(error => {
      // Handle error.
      console.log('사용불가한 이메일', error.response);
      alert('이미사용중인 이메일입니다');
    });
 }

 /*******************이메일 인증************************/
const emailNumCheck = () => {
    
  console.log(emailcheck);

//203.250.32.29
  axios
  .get(' http://203.250.32.29:2201/api/manager-service/register/check/email/'+ email + '/11111', {
    userEmail: emailcheck,
  })
  .then(response => {
    // Handle success.
    console.log('이메일 인증완료');
    alert('인증되었습니다');
    
  })
  .catch(error => {
    // Handle error.
    console.log('인증번호 틀림', error.response);
    alert('인증번호가 틀렸습니다.');
  });
}


   /***************닉네임 인증*********************/
 const nicknameCheck = () => {
    
  console.log(nickname);

//203.250.32.29
  axios
  .get(' http://203.250.32.29:2201/api/manager-service/register/check/nickname/'+ nickname + '/' + email, {
    userNickname: nickname,
  })
  .then(response => {
    // Handle success.
    console.log('사용가능한 닉네임');
    alert('사용가능한 닉네임입니다');
    
  })
  .catch(error => {
    // Handle error.
    console.log('사용불가한 닉네임', error.response);
    alert('중복된 닉네임입니다');
  });
}

/*******************이메일 형식 유효성 검사************************/
const CheckEmail = (e) => {
  var emailForm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  // 형식에 맞는 경우 true 리턴
  console.log('이메일 유효성 검사: ', emailForm.test(e.target.value))

  if( emailForm.test(e.target.value) == true) {
    return setActEmailCheck(true);
  } 
  else {
    alert('형식이 맞지 않습니다');
  }

}





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
                  <Input type="text" value={name} onChange={(e)=> {
                 setName(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>


                <Group>
                  <label>이메일</label>
                  <Input type="email" value={email} onChange={(e)=> {
                 setEmail(e.target.value);
              }} onBlur={CheckEmail}/>
                <button onClick={() => {
                emailCheck();
               }} disabled={actEmailCheck == false}>중복확인</button>  
                </Group><br/>
                
                <Group>
                  <label>이메일인증</label>
                  <Input type="text"  value={emailcheck} onChange={(e)=> {
                 setEmailcheck(e.target.value);
              }}/>
                  <button onClick={() => {
                    emailNumCheck();
                  }} disabled={!emailcheck}>인증하기</button>
                </Group><br/>

                <Group>
                  <label>닉네임</label>
                  <Input type="text" value={nickname}  onChange={(e)=> {
                 setNickname(e.target.value);
              }}/>
              <button onClick={() => {
                nicknameCheck();
               }} disabled={!nickname}>중복확인</button> 
                </Group><br/>

                <Group>
                  <label>비밀번호</label>
                  <Input type="password" value={pwd}  onChange={(e)=> {
                 setPwd(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>

                <Group>
                  <label>비밀번호 확인</label>
                  <Input type="password" value={pwdcheck}  onChange={(e)=> {
                 setPwdcheck(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>
{/*
                <Group>
                  <label>생년월일</label>
                  <Input type="date" value={birth}/>
                </Group><br/>
 */}
                <Group>
                  <label>전화번호</label>
                  <Input type="number" value={phonenum} onChange={(e)=> {
                 setPhonenum(e.target.value);
              }}placeholder="'-' 없이 숫자로만 입력해주세요" onKeyUp={changeButton}/>
                </Group><br/>

               <hr></hr> 
               <Signup_button disabled={SignupButton} onClick={() => {
                register();
               }}>
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