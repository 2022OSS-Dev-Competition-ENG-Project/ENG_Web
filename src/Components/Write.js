import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Style/Write.css'


let Wirte_box = styled.form`
  width: 1200px;
  height: auto;
  background-color: #FAFAFA;
`

let Title_input = styled.input`
  width: 100%;
  margin-bottom : 10px;
  height: 40px;
  border: solid 3px grey;
  border-radius: 10px;
`
 let Textarea = styled.textarea`
  resize: none;
  border-radius:10px;
  width: 1200px;
  padding: 20px;
  margin-top: 10px;
 `

 let Register_button = styled.button`
  background-color: #0F4C75;
  color: white;
  border-radius: 5px;
  width: 90px;
  height: 40px;
 `

function Write() {

  const [content, setContent] = useState({
    title : '',
    content: ''
  })

  

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    })
    console.log(content);
  };
  
  
  
  return(
    <>
    <Wirte_box action='http://203.250.32.29:2200//api/facility/content/register' name="photo" method="post" encType="multipart/form-data">
        <Title_input placeholder='제목을 입력하세요' name='title'></Title_input> 
        <Form.Control type="file"  />
        <Textarea rows ={20}></Textarea>
        <button type='submit'>등록하기</button>
    </Wirte_box>
  
  </>
  );
}

export default Write;