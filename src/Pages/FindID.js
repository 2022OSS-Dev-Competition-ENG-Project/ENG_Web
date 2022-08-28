import React from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'
import axios from 'axios';

function FindID(props) {
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
          <Form.Control type="text" placeholder="홍길동" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="text" placeholder="'-'없이 입력해주세요" />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button">
            아이디찾기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default FindID;
