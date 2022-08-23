import React from 'react';
import styled from 'styled-components';

function Write() {
  let Wirte_box = styled.div`
  width: 700px;
  height: auto;
  background-color: white;
`
 let Textarea = styled.textarea`
  
 `
  return(
    <Wirte_box>
      <div>
        <span name="title" rules={[{required: true, message: '제목을 입력하세요'}]}>제목: </span><input placeholder='제목을 입력하세요'></input>
      </div>
      <div>
        <span>내용: </span><Textarea rows ={10}></Textarea>  
      </div></Wirte_box>
  );
}

export default Write;