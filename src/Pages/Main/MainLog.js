import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FindID from '../Account/FindID';
import FindPW from '../Account/FindPW';
import axios from 'axios';
import styled from 'styled-components';

let Body = styled.div`
  background : #E4E4E4;
  width: 100vw;
  height: 100vh;
  display: flex;
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

let Main = styled.div`
  height: 100vh;
  width: 47vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E4E4E4;
  margin: 0;
  padding: 0;
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

let LogoSub = styled.h3`
font-weight: 700;
`

let Side = styled.div`
  width: 450px;
  float: right;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`

let LoginButton = styled.button`
  width: 100%;
  height: 35px;
  margin: 3px;
  border-radius: 5px;
  border-style: none;
`

let Findbutton = styled.button`
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

function MainLog() {
  
    let navigate = useNavigate();

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    let [LogButton, setLogButton] = useState(true);


    // 로그인 조건 성립시 로그인 버튼 활성화
    function changeButton() {
      id.includes('@') && pw.length >= 1 ? setLogButton(false) : setLogButton(true);
    }

    // 메인 페이지로 이동
    const goMain = () => {
      navigate('/main');
    };

    const Login = () => {
      
      // axios를 이용해 로그인할 때 필요한 값 POST
      axios
      .post('http://jlchj.iptime.org:8000/manager-service/login', {
        managerEmail: id,
        managerPassword: pw,
      })
      .then(response => {
        // 서버통신 성공시
        localStorage.setItem('managerUuid',response.data.managerUuid);
        localStorage.setItem('managerName',response.data.managerName);
        goMain();
      
      })
      .catch(error => {
        // 서버 통신 실패시
        console.log('로그인 실패', error.response);
        alert(error.response.data);
      });
    }
  // 모달창 구현에 필요한 변수
  const [findIDOn, setFindIDModalOn] = React.useState(false);
  const [findPWOn, setFindPWModalOn] = React.useState(false);

    return (
      <>
      <Body>
        <Header>
          <Logobox>
            <Logo>!ENG?</Logo><LogoSub>for Manager</LogoSub>
          </Logobox>
        </Header>
        <Main>
          <Side>
            <Form>
              {/* 로그인 */}
                <h3>Login</h3><hr></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>아이디</Form.Label>
                  <Form.Control type="email" placeholder="이메일을 입력해주세요" value={id} onChange={(e)=> {
                  setId(e.target.value);
                }} onKeyUp={changeButton}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={pw} onChange={(e)=> {
                  setPw(e.target.value);
                }} onKeyUp={changeButton}/>
                </Form.Group>

                <LoginButton disabled={LogButton} onClick={()=> {Login()}} type="button">
                  LOGIN
                </LoginButton>
                <Hr></Hr>

                {/* 아이디 찾기 */}
                <Findbutton type="button" onClick={()=> setFindIDModalOn(true)}>아이디 찾기</Findbutton>
                  <FindID
                    show = {findIDOn}
                    onHide={() => setFindIDModalOn(false)}
                  />

                {/* 비밀번호 찾기 */}
                <Findbutton  type="button" onClick={()=> setFindPWModalOn(true)}>비밀번호 찾기</Findbutton>
                  <FindPW
                    show = {findPWOn}
                    onHide={() => setFindPWModalOn(false)}
                  />
                {/* 회원가입 */}
                <Findbutton onClick={()=> {navigate('/signup')}}>회원가입</Findbutton>
            </Form>
          </Side>
        </Main>
      </Body>
      </>
    )
  }


export default MainLog;