import React, {useState} from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'
import axios from 'axios';


function FindPW(props) {

  let [name, setName] =useState('');
  let [email, setEmail] = useState('');

  let [FindpwButton, setFindpwButton] = useState(true);

  function changeButton() {
    name.length>=1 && email.includes('@') ?  setFindpwButton(false) : setFindpwButton(true); //입력칸 조건에 따른 찾기 버튼 활성화
   }
   /************ axios로 이름과 이메일 서버로 Post ************/
   const Find = () => {
    axios
      .post('http://203.250.32.29:2201/api/manager-service/ManagerPasswordReset', {
        managerName: name,
        managerEmail: email,
      })
      .then(response => {
        // 서버통신 성공시
        console.log('성공');
        console.log(response.data)
        alert('회원님의 이메일로 임시 비밀번호가 발송되었습니다.');
        
      })
      .catch(error => {
        // 서버통신 실패시
        console.log('로그인 실패', error.response);
        alert(error.response.data);
      });
   }
  
  return (
/************ bootstrap을 이용하여 모달창 구현 ************/
    <Modal
      {...props}
      size="mid"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          비밀번호찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="홍길동" value={name} onChange={(e)=> {   //onChange 함수를 통해 입력값 변경
                 setName(e.target.value);
              }}onKeyUp={changeButton} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="example@company.com" value={email} onChange={(e)=> {  //onChange 함수를 통해 입력값 변경
                 setEmail(e.target.value);
              }}onKeyUp={changeButton}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" disabled={FindpwButton} onClick={()=> {Find()}}>  {/* 입력조건이 맞을시 버튼 활성화 */}
            비밀번호찾기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default FindPW;
