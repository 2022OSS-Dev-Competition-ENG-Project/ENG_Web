import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import FindID from './FindID';
import FindPW from './FindPW';

// styled-componet
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  `
  const H1 = styled.h1`
    color: black;
    font-size: 35px;
    margin: 0;
    padding: 0;
  `
  const Group = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1px;
    padding: 0;
  `
  const Input = styled.input`
    width: 250px;
    border-style: none;
    background : #F5F5F5;
    border: 1px solid #727273;
    border-radius: 5px;
    padding: 2px;
  `
  const Formbox = styled.div`
    width: 500px;  
  `
  const Signup_button = styled.button`
    width: 100%;
    height: 30px ; 
    margin: 3px;
    border-radius: 5px;
    border-style: none;
  `
  const Button = styled.button`
    background-color:#F5F5F5;
    margin: 0 10px 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
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
//버튼 활성화 조건
    function changeButton() {
      name.length >= 1 && phonenum.length == 11 && pwd == pwdcheck && pwd.length >= 1 && pwdcheck.length >= 1 ? setSignupButton(false) : setSignupButton(true);
    }

/*************** 회원가입 ***************/
    const register = () => {

      axios
      .post('http://jlchj.iptime.org:8000/manager-service/register', {
        managerEmail: email,
        managerPassword: pwd,
        managerName: name,
        managerNickname: nickname,
        managerPhoneNumber: phonenum,
      })
      .then(response => {
        // 서버 통신 성공시
        console.log('회원가입 완료');
        alert('회원가입완료되었습니다');
        goToMain(); //회원가입 성공시 로그인 페이지로 이동
        
      })
      .catch(error => {
        // 서버 통신 실패시
        console.log('회원가입 실패', error.response);
        alert('회원가입 조건을 다시 확인해주세요');
      });
   }
    //메인페이지로 가는 함수
   const goToMain = () => {
    navigate('/');
   };

   /*************** 이메일 중복확인 ***************/

   const emailCheck = () => {
    axios
    .get('http://jlchj.iptime.org:8000/manager-service/register/check/email/' + email)
    .then(response => {
      // 서버 통신 성공시
      console.log('사용가능한 이메일');
      alert('사용가능한 이메일입니다.\n해당 이메일로 인증번호가 전송되었습니다.');
      console.log(response);
      
    })
    .catch(error => {
      // 서버 통신 실패시
      console.log('사용불가');
      alert('이미사용중인 이메일입니다');
      console.log(error.response);
    });
 }

 /*************** 이메일 인증 ***************/
const emailNumCheck = () => {
    
  axios
  .get('http://jlchj.iptime.org:8000/manager-service/register/check/email/'+ email + '/' + emailcheck)
  .then(response => {
    // 서버 통신 성공시
    console.log('이메일 인증완료');
    alert('인증되었습니다');
    console.log(response);
    
  })
  .catch(error => {
    // 서버 통신 실패시
    console.log('인증번호 틀림');
    console.log(error.response);
    alert('인증번호가 틀렸습니다.');
    
  });
}

 /*************** 닉네임 인증 ***************/
 const nicknameCheck = () => {
  axios
  .get('http://jlchj.iptime.org:8000/manager-service/register/check/nickname/'+ nickname)
  .then(response => {
    // 서버 통신 성공시
    console.log('사용가능한 닉네임');
    alert('사용가능한 닉네임입니다');
    console.log(response);
  })
  .catch(error => {
    // 서버 통신 실패시
    console.log('사용불가한 닉네임', error.response);
    alert('중복된 닉네임입니다');
    console.log(error.response);
  });
}
/*************** 이메일 형식 유효성 검사 ***************/
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
            <img alt="signup" src={process.env.PUBLIC_URL + '/img/signup.png'}></img> {/* public파일에 있는 사진 불러옴 */}
          </Header>
          <Box>
          <H1>회원가입</H1>
            <Formbox>
              <hr></hr>
              <Group>
                  <label>이름</label>
                  <Input type="text" value={name} onChange={(e)=> {  // public파일에 있는 사진 불러옴 / onChange - 입력값변경 
                 setName(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>

                <Group>
                  <label>이메일</label>
                  <Input type="email" value={email} onChange={(e)=> { // onChange 함수를 통해 입력값 변경
                 setEmail(e.target.value);
              }} onBlur={CheckEmail}/>                                {/* 입력칸을 벗어났을때 이메일 형식 검사 */}
                <button type="button" onClick={() => {
                emailCheck();                                         // 버튼 클릭시 이메일 중복검사
               }} disabled={actEmailCheck == false}>중복확인</button>  {/* 이메일 형식 맞을시 버튼 활성화 */}
                </Group><br/>
                
                <Group>
                  <label>이메일인증</label>
                  <Input type="text"  value={emailcheck} onChange={(e)=> { // onChange 함수를 통해 입력값 변경
                 setEmailcheck(e.target.value);
              }}/>
                  <button type="button"  onClick={() => {                                 //버튼 클릭시 인증번호 확인
                    emailNumCheck();
                  }} disabled={!emailcheck}>인증하기</button>              {/* 입력이 없으면 버튼 비활성화 */}
                </Group><br/>

                <Group>
                  <label>닉네임</label>
                  <Input type="text" value={nickname}  onChange={(e)=> {   // onChange 함수를 통해 입력값 변경
                 setNickname(e.target.value);
              }}/>
              <button type="button"  onClick={() => {
                nicknameCheck();                                          // 버튼 클릭시 닉네임 중복검사
               }} disabled={!nickname}>중복확인</button>                  {/* 입력이 없으면 버튼 비활성화 */}
                </Group><br/>

                <Group>
                  <label>비밀번호</label>
                  <Input type="password" value={pwd}  onChange={(e)=> {   // onChange 함수를 통해 입력값 변경
                 setPwd(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>

                <Group>
                  <label>비밀번호 확인</label>
                  <Input type="password" value={pwdcheck}  onChange={(e)=> {  // onChange 함수를 통해 입력값 변경
                 setPwdcheck(e.target.value);
              }} onKeyUp={changeButton}/>
                </Group><br/>

                <Group>
                  <label>전화번호</label>
                  <Input type="number" value={phonenum} onChange={(e)=> {    // onChange 함수를 통해 입력값 변경
                 setPhonenum(e.target.value);
              }}placeholder="'-' 없이 숫자로만 입력해주세요" onKeyUp={changeButton}/>
                </Group><br/>

               <hr></hr> 
               <Signup_button type="button"  disabled={SignupButton} onClick={() => {       //회원가입 조건에 따른 버튼 비활성화 유무
                register();
               }}>
                가입하기
               </Signup_button>
              <hr></hr>
                <Button type="button" onClick={()=> setFindIDModalOn(true)}>아이디 찾기</Button>    {/* 버튼클릭시 아이디 찾기 모달창 실행 */}
                  <FindID
                    show = {findIDOn}
                    onHide={() => setFindIDModalOn(false)}
                  />
                <Button type="button" onClick={()=> setFindPWModalOn(true)}>비밀번호 찾기</Button>  {/* 버튼클릭시 비밀번호 찾기 모달창 실행 */}
                  <FindPW
                    show = {findPWOn}
                    onHide={() => setFindPWModalOn(false)}
                  />

                <Button onClick={()=> {navigate('/')}}>로그인</Button>                 {/* 버튼클릭시 회원가입페이지 이동 */}
            </Formbox>
          </Box>

        </Container> 
      </Body>

    )
  
  }

export default SignUp;