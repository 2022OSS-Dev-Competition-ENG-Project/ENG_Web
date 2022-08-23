import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';



function BuildingRegister() {

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
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

  let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;

  `
  let Input_box = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 500px;
    height: auto;
    background-color:#FAFAFA;
    margin: 5px;
    font-size: 20px;
  `
  let Input = styled.input`
    margin: 0 0 0 10px;
    padding: 2px;
    width: 400px;
  `
 let Button = styled.button`
  margin: 10px;
  font-size: 20px;
  color: white;
  background-color: #0F4C75;
 `
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>시설물등록</Title_box><hr></hr>
          <Content_box>
            <Input_box>시설물명: <Input></Input></Input_box> 
            <Input_box>위치: <Input></Input></Input_box>  
            <Input_box>관리자: <Input></Input></Input_box>
            <Button> 등록하기</Button> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default BuildingRegister;