import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Search from './Search'

let Div = styled.div`
background-color: #FAFAFA;
`

  let Box1 = styled.div`
  width: 300px;
  height: auto;
  background-color: #FAFAFA;
  margin: 0 ;
  padding-top:120px
`

let Box2 = styled.div`
  width: 1300px;
  height: 70vh;
  background-color:#FAFAFA;
  margin: 0 ;
  display: flex;
  flex-direction: column;
`
let Title_box = styled.div`
widith: auto;
height: auto;
display: flex;
justify-content: flex-start;
background-color:#FAFAFA;
font-size: 50px;
padding:0;
margin:0 0 0 20px;
    
`
let Content_box=styled.div`
widith: auto;
height: 500px;
background-color: #FAFAFA;
display:flex;
justify-content: center;
flex-direction: column;

`

let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;

`
let Menu = styled.div`
  border: solid 3px;
  width: 200px;
  font-size: 20px;
  font-weight: 1000;
  border-radius: 20px;
  margin: 20px 10px;
`
  let Input_box = styled.div`
  display:flex;
  justify-content: center;
  width: auto;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 20px;
`
let Input = styled.div`
  padding: 2px;
  width: 400px;
  margin: 0 10px;
  border: solid 1px;
  border-radius: 10px;
`
let Uuid = styled.button`
  padding: 2px;
  width: 400px;
  margin: 0 10px;
  border: solid 1px;
  border-radius: 10px;
`

let Register_button = styled.button`

`


function ManagerRegister() {

  const [findOn, setFindModalOn] = React.useState(false);
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>관리자등록</Title_box><hr></hr>
          <Content_box>
            <Menu>
              관리자
            </Menu>
            <Table hover>
              <thead>
                <tr>

                  <th>이름</th>
                  <th>담당위치</th>
                  <th>전화번호</th>
                  <th>권한</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>정승균</td>
                  <td>D2</td>
                  <td>010-1234-5678</td>
                  <td><button>수정</button><button>삭제</button></td>
                  
                </tr>
                <tr>

                  <td>이정훈</td>
                  <td>C6</td>
                  <td>010-3569-7896</td>
                  <td><button>수정</button><button>삭제</button></td>
                </tr>

              </tbody>
            </Table>
            <Menu>
              추가
            </Menu>
            <Input_box>매니저고유번호 :<Uuid type="button" onClick={()=> setFindModalOn(true)}>검색하기</Uuid>
              <Search
                  show = {findOn}
                  onHide={() => setFindModalOn(false)}
                />
            시설물번호: <Input> {localStorage.getItem('useFacility')}</Input>
            </Input_box> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default ManagerRegister;