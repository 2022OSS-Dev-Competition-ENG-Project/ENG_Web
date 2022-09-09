import {React, useEffect, useState, useRef, useCallback, Component} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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
  

class Write extends Component {

    state = {
      contentImg: null,
    }

    handleFile(e){
    let contentImg = e.target.files[0]
    this.setState({contentImg: contentImg})

  }

  handleUpload(e){

    let contentImg = this.state.contentImg
    let formdata = new FormData()

    formdata.append('contentImg',contentImg)
    formdata.append('name', "Arjun Yonjan")
    

    axios({
      url:'/some/api',
      method: "POST",
      headers:{
        "Content-Type": "multipart/form-data", 
      },
      data: formdata
    }).then((res)=>{

    },(err)=>{
        //err
    })
  }

  render() {
    return (
      <>

     <Wirte_box encType='multipart/formdata'>
      <div>
        <Title_input placeholder='제목을 입력하세요' name='title' type="text"
        ></Title_input> 
        <input type = "file"  name="contentImg" onChange={(e)=>this.handleFile(e)} />
        <Content_input placeholder='내용을 입력하세요' name='content'></Content_input> 
      </div> <br></br>
      <Register_button type="button" onClick={(e)=>this.handleUpload(e)} >등록하기</Register_button>

    </Wirte_box> 
    </>

    );
  }

}

export default Write;