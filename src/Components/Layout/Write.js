import {React, useState} from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
/*******************공지글 작성 페이지에서 작성 부분*****************/

let Wirte_box = styled.form`
  width: 1000px;
  height: auto;
  background-color: #FAFAFA;
`

let Title_input = styled.input`
  width: 100%;
  margin : 10px;
  height: 50px;
  border: solid 2px grey;
  border-radius: 10px;
`

let Content_input = styled.input`
  width: 100%;
  margin : 10px;
  height: 500px;
  border: solid 3px grey;
  border-radius: 10px;
`

 let Register_button = styled.button`
  background-color: #0F4C75;
  color: white;
  border-radius: 5px;
  width: 90px;
  height: 40px;
 `
  
/********** multipart/form-data 형식으로 데이터를 전송하여 공지글 등록 기능 구현 **************/
const Write = () =>  {

  let formData = new FormData();      
  let [title, setTitle] =useState('');
  let [content, setContent] = useState('');
  const facilityNum = localStorage.getItem('facilityNum');
  const managerUuid = localStorage.getItem('managerUuid');
  let navigate = useNavigate();


/************ 파일 제외 필요한 정보 저장 *********/
    let dataSet = {
      noticeTitle : title,
      noticeText : content,
      noticeLook : 1,
      facilityNum : facilityNum,
      managerUuid :  managerUuid
    }
/************ formData에 해당 key(facilityNotice)값과 value값을 application/json타입으로 저장 ************/
    formData.append("facilityNotice", new Blob([JSON.stringify(dataSet)], {
      type: "application/json"
  }));


/*********** 파일선택시 파일 정보 저장 **********/

  const onFileChange = (e) => {
    if(e.target && e.target.files[0]) {
      formData.append("image", e.target.files[0], "notice.png");
    }
    
  }

/************ 입력된 파일 및 정보를 axios를 통해 전송 ************/
    const SubmitFileData = () => {

      for(var pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
      }
      axios({
        url:'http://jlchj.iptime.org:8000/facility-service/notice/create',
        method: "POST",
        headers:{                                // Header에 서버에 맞는 데이터 타입 명시
          'Content-Type': 'multipart/form-data', // 사진은 두종류의 content type이 필요=> multipart/form-data 
        },
        data: formData
      }).then((res)=>{
        alert('공지가 등록되었습니다');          // 공지가 등록되었을 때 알림창
        navigate('/notice');
      },(err)=>{
        console.log(err);
      })

    }
 
  return (
      <>
      {/************** onChange함수를 이용하여 입력값 변경 ************/}
      <Wirte_box encType='multipart/formdata'>
      <div>
        
        <Title_input placeholder='제목을 입력하세요' name='title' type="text" value={title} onChange={(e)=> {
                 setTitle(e.target.value);
              }}
        ></Title_input> 

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" name="files" onChange={onFileChange}/>
        </Form.Group>
       {/*<Content_input placeholder='내용을 입력하세요' name='content' type="text"  value={content} onChange={(e)=> {
                 setContent(e.target.value);
              }}></Content_input> */} 
      </div> <br></br>
      <Register_button type="button" onClick={SubmitFileData} >등록하기</Register_button>

      </Wirte_box> 
      </>

    );
  

}

export default Write;