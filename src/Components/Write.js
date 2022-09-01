import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Style/Write.css'


let Wirte_box = styled.div`
  width: auto;
  height: auto;
  background-color: white;
`

let Title_input = styled.input`
  width: 1000px;
  margin-bottom : 30px;
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
    <Wirte_box>
      <div>
        <span name="title">제목: </span><Title_input placeholder='제목을 입력하세요' name='title' onChange={getValue}></Title_input>
      </div>
      <div>
        <div>
          <Form.Group controlId="formFileMultiple" className="mb-3">
                <CKEditor
                          editor={ ClassicEditor }
                          data="<p>내용을 입력해주세요</p>"
                          onReady={ editor => {
                              console.log( 'Editor is ready to use!', editor );
                          } }
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            setContent({
                              ...content,
                              content: data
                            })
                            console.log(content);
                          }}
                          onBlur={ ( event, editor ) => {
                              console.log( 'Blur.', editor );
                          } }
                          onFocus={ ( event, editor ) => {
                              console.log( 'Focus.', editor );
                          } }
                          
                      />
          {/*   <Form.Control type="file" multiple />*/}
          </Form.Group>
     {/*  <Textarea rows ={20}></Textarea>  */}
        
        </div>
      </div>
      </Wirte_box>
  );
}

export default Write;