import React, {useState} from 'react';
import styles from "../style/mainLog.module.css";
import {Form, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import FindID from './FindID';
import FindPW from './FindPW';
import axios from 'axios';

function MainLog() {
  

  let navigate = useNavigate();
  const [findIDOn, setFindIDModalOn] = React.useState(false);
  const [findPWOn, setFindPWModalOn] = React.useState(false);
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

    return (
      <>
      <body>
        <header className={styles.MainLog}>
          <logo className={styles.logo}>
            <h1>!ENG?</h1><h3>for Manager</h3>
          </logo>
        </header>
        <side className={styles.login}>
          <Form>
              <h3>Login</h3><hr></hr>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="email" placeholder="123456@abcd.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <button className={styles.loginbutton} type="submit">
                LOGIN
              </button>
              <hr></hr>
              <button onClick={()=> setFindIDModalOn(true)}>아이디 찾기</button>
                <FindID
                  show = {findIDOn}
                  onHide={() => setFindIDModalOn(false)}
                />

              <button onClick={()=> setFindPWModalOn(true)}>비밀번호 찾기</button>
                <FindPW
                  show = {findPWOn}
                  onHide={() => setFindPWModalOn(false)}
                />

              <button onClick={()=> {navigate('/signup')}}>회원가입</button>
          </Form>
        </side>
      </body>
      </>
    )
  }


export default MainLog;
