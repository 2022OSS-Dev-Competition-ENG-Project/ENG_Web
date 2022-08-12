import React from 'react';
import styles from "../style/mainLog.module.css";
import {Form, Button} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function signUp() {
  

  let navigate = useNavigate();

    return (
      <body>
        <header>
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

              <Button variant="primary" type="submit">
                LOGIN
              </Button>
              <hr></hr>
              <Button onClick={()=> {navigate('/findid')}}>아이디 찾기</Button>
              <Button onClick={()=> {navigate('/findpw')}}>비밀번호 찾기</Button>
              <Button onClick={()=> {navigate('/signup')}}>회원가입</Button>
          </Form>
        </side>
      </body>
    )
  }


export default signUp;