import React from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap'

function FindPW(props) {
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
          비밀번호찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" placeholder="아이디를 입력하세요" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="12345@abc.com" />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button">
            비밀번호찾기
        </Button>
      </Modal.Footer>
      </Container>
    </Modal>
    );

}

export default FindPW;
