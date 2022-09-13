import {React, useEffect, useState, useRef, useCallback, Component} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import axios, { Axios } from 'axios';

let Wirte_box = styled.form`
  width: 1000px;
  height: auto;
  background-color: #FAFAFA;
`

let Title_input = styled.input`
  width: 100%;
  margin : 10px;
  height: 40px;
  border: solid 3px grey;
  border-radius: 10px;
`

let Content_input = styled.input`
  width: 100%;
  margin : 10px;
  height: 500px;
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
  

const Write = () =>  {

  let formData = new FormData();      
  let [title, setTitle] =useState('');
  let [content, setContent] = useState('');
  const facilityNo = localStorage.getItem('useFacility')
  const managerUuid = localStorage.getItem('managerUuid')

    const onFileChange = (e) => {
      console.log(e.target.files[0])
      if(e.target && e.target.files[0]) {
        formData.append("images", e.target.files[0], "a.png");
        console.log(formData)
      }
      
    }

    let dataSet = {
      contentTitle : title,
      contentText : content,
      contentLook : 100,
      contentType : 1,
      facilityNo : facilityNo,
      userUuid :  managerUuid
    }

    formData.append("facilityContentDto", new Blob([JSON.stringify(dataSet)], {
      type: "application/json"
  }));

    const SubmitFileData = () => {

      for(var pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
      }
      axios({
        url:'http://203.250.32.29:2200/api/facility/content/register',
        method: "POST",
        headers:{
          'Content-Type': 'multipart/form-data',
        },
        data: formData
      }).then((res)=>{
        console.log('등록되었습니다');
        alert('공지가 등록되었습니다');

      },(err)=>{
        console.log("-------> 에러 데이터셋" + dataSet);
        console.log(dataSet)
        console.log("------> 에러 폼데이터" + formData);
        console.log(formData)
      })

    }

  
  return (
      <>
      <Wirte_box encType='multipart/formdata'>
      <div>
        <Title_input placeholder='제목을 입력하세요' name='title' type="text" value={title} onChange={(e)=> {
                 setTitle(e.target.value);
              }}
        ></Title_input> 
        <input type = "file"  name="files" onChange={onFileChange}/>
        <Content_input placeholder='내용을 입력하세요' name='content' type="text"  value={content} onChange={(e)=> {
                 setContent(e.target.value);
              }}></Content_input> 
      </div> <br></br>
      <Register_button type="button" onClick={SubmitFileData} >등록하기</Register_button>

      </Wirte_box> 
      </>

    );
  

}

export default Write;