import React, {useState} from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'
import axios from 'axios';

function Search(props) {

  let [name, setName] =useState('');
  let [num, setNum] = useState('');

  let [FindButton, setFindButton] = useState(true);

  function changeButton() {
    name.length>=1 && num.length==11 ?  setFindButton(false) : setFindButton(true);
   }

   const Find = () => {
    axios
      .get('http://203.250.32.29:2200/api/facility/find/manager/'+ name +'/' + num, {
        managerName: name,
        managerPhoneNumber: num,
      })
      .then(response => {
        // Handle success.
        console.log('성공');
        console.log(response.data.managerUuid)
        alert( name +'님의 UUID가 등록되었습니다');
        localStorage.setItem('registerManager',response.data.managerUuid);
        
      })
      .catch(error => {
        // Handle error.
        console.log('실패', error.response);
        console.log(name);
        console.log(num);
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
          UUID찾기
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
        <Button variant="primary" type="button" disabled={FindButton} onClick={()=> {Find()}}>
            검색하기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default Search;
