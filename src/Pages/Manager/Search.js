import React, {useState} from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'
import axios from 'axios';

function Search(props) {

  let [name, setName] =useState('');
  let [num, setNum] = useState('');
  let [FindButton, setFindButton] = useState(true);

  //입력조건에 따른 버튼 활성화
  function changeButton() {
    name.length>=1 && num.length==11 ?  setFindButton(false) : setFindButton(true);
   }

   // axios를 이용해 UUID를 검색 구현
   const Find = () => {
    axios
      .get('http://jlchj.iptime.org:8000/facility-service/join/find/manager/'+ name +'/' + num)
      .then(response => {
        // 서버통신 성공시
        alert( name +'님의 UUID가 등록되었습니다');
        localStorage.setItem('registerManager',response.data);
        console.log(response);
      })
      .catch(error => {
        // 서버통신 실패시
        alert(error.response.data);
      });
   }
 
    return (
    //모달창
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
        {/* 이름 입력칸 */}
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="홍길동" value={name} onChange={(e)=> {                     // onChange 함수를 통해 입력값 변경
                 setName(e.target.value);
              }}onKeyUp={changeButton}/>
        </Form.Group>
        {/* 전화번호 입력칸 */}
        <Form.Group className="mb-3">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="'-'없이 입력해주세요" value={num} onChange={(e)=> {       // onChange 함수를 통해 입력값 변경
                 setNum(e.target.value);
              }} onKeyUp={changeButton}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" disabled={FindButton} onClick={()=> {Find()}}>                {/* onChange 함수를 통해 입력값 변경 */}
            검색하기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default Search;
