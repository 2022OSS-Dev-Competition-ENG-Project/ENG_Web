import React from 'react';
import styled from 'styled-components';

function Write() {
  let Wirte_box = styled.div`
  width: auto;
  height: auto;
  background-color: white;
`

let Title_input = styled.input`
  width: 1000px;
`
 let Textarea = styled.textarea`
  resize: none;
  border-radius:10px;
  width: 1300px;
  padding: 20px;
 `

 let Register_button = styled.button`
  background-color: #0F4C75;
  color: white;
  border-radius: 5px;
  width: 90px;
  height: 40px;
 `
  return(
    <Wirte_box>
      <div>
        <span name="title" rules={[{required: true, message: '제목을 입력하세요'}]}>제목: </span><Title_input placeholder='제목을 입력하세요'></Title_input>
      </div>
      <div>
        <div>내용<Textarea rows ={20}></Textarea>  </div>
      </div>
      <Register_button>등록하기</Register_button></Wirte_box>
  );
}

export default Write;