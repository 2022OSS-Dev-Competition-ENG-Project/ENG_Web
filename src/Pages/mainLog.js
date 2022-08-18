import React from 'react';
import styles from "../style/mainLog.module.css";
import {Form, Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import SignUp from './SignUp';
import FindID from './FindID';
import FindPW from './FindPW';

function MainLog() {
  

  let navigate = useNavigate();

    return (
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
                <Form.Label>ID</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <button className="signin" type="submit">
                LOGIN
              </button>
              <hr></hr>
              <button onClick={()=> {navigate('/findid')}}>아이디 찾기</button>
              <button onClick={()=> {navigate('/findpw')}}>비밀번호 찾기</button>
              <button onClick={()=> {navigate('/signup')}}>회원가입</button>
          </Form>
        </side>
      </body>
    )
  }


export default MainLog;
