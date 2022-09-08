import React, {useState} from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'
import axios from 'axios';

function FindManager(props) {

  let [name, setName] =useState('');
  let [num, setNum] = useState('');

  let [FindidButton, setFindidButton] = useState(true);

  function changeButton() {
    name.length>=1 && num.length==11 ?  setFindidButton(false) : setFindidButton(true);
   }

   const Find = () => {
    axios
      .post('http://203.250.32.29:2201/api/manager-service/FindManagerId', {
        managerName: name,
        managerPhoneNumber: num,
      })
      .then(response => {
        // Handle success.
        console.log('성공');
        console.log(response.data)
        alert('회원님의 아이디는 '+ (response.data) + '입니다');
        
      })
      .catch(error => {
        // Handle error.
        console.log('로그인 실패', error.response);
        alert(error.response.data);
      });
   }
 
    return (
    <Modal
      {...props}
      size="mid"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          아이디찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="홍길동" value={name} onChange={(e)=> {
                 setName(e.target.value);
              }}onKeyUp={changeButton}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="'-'없이 입력해주세요" value={num} onChange={(e)=> {
                 setNum(e.target.value);
              }} onKeyUp={changeButton}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" disabled={FindidButton} onClick={()=> {Find()}}>
            아이디찾기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default FindManager;
