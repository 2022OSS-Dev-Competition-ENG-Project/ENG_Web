import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap'

const FindID = ({ show, onHide}) => {
  return(
    <Modal
      show = {show}
      onHide= {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          아이디찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>

      <Form.Group className="mb-3">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="text" placeholder="'-'없이 적어주세요" />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button">
          아이디찾기
        </Button>
        <Button onClick={onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  )

}

export default FindID;
