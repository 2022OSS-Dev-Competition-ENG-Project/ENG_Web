import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';

const Div = styled.div`
background-color: #FAFAFA;
`

  const Box1 = styled.div`
  width: 300px;
  height: auto;
  background-color: #FAFAFA;
  margin: 0 ;
  padding-top:120px
`

const Box2 = styled.div`
  width: 1300px;
  height: 70vh;
  background-color:#FAFAFA;
  margin: 0 ;
  display: flex;
  flex-direction: column;
`
const Title_box = styled.div`
widith: auto;
height: auto;
display: flex;
justify-content: flex-start;
background-color:#FAFAFA;
font-size: 50px;
padding:0;
margin:0 0 0 20px;
    
`
const Content_box=styled.div`
widith: auto;
height: 500px;
background-color: #FAFAFA;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Body = styled.div`
display: flex;
justify-content: center;
margin: 100px 0 0 0;
background-color: #FAFAFA;

`
const Input_box = styled.label`
  display:flex;
  justify-content: flex-end;
  width: 500px;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 20px;
  
`
const Input = styled.input`
  margin: 0 0 0 10px;
  padding: 2px;
  width: 400px;
  border-radius: 8px;
  border: 3px solid #727272;
`
const Button = styled.button`
margin: 10px;
font-size: 20px;
color: white;
background-color: #0F4C75;
`


function BuildingRegister() {


 const [facilityName, setFacilityName] = useState('');
 const [facilityAddress, setFacilityAddress] = useState('');
 const [userId, setUserId] = useState('');

{/*
 const onChangeName = (e) => {
  setFacilityName(e.target.value);
 };

 const onChangeAddress = (e) => {
  setFacilityAddress(e.target.value);
 };

 const onChangeId = (e) => {
  setUserId(e.target.value);
 }; 
 */}
 const register = () => {

    console.log(facilityName);
    console.log(facilityAddress);
    console.log(userId);
//203.250.32.29
    axios
    .post('http://203.250.32.29:2200/api/registerFacility', {
      facilityName: facilityName,
      facilityAddress: facilityAddress,
      userId: userId,
    })
    .then(response => {
      // Handle success.
      console.log('시설물등록완료');
      alert('시설물이 등록되었습니다.');
      
    })
    .catch(error => {
      // Handle error.
      console.log('이미 등록된 시설', error.response);
      alert('이미 등록된 시설입니다.');
    });
 }

      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>시설물등록</Title_box><hr></hr>
          <Content_box>
            <Input_box htmlFor='facility_name'>시설물명: 
              <Input type="text"  value={facilityName} onChange={(e)=> {
                setFacilityName(e.target.value);
              }}></Input>
            </Input_box> 
            <Input_box  htmlFor='facility_address'>위치: 
              <Input  type="text"  value={facilityAddress} onChange={(e)=> {
                 setFacilityAddress(e.target.value);
              }}></Input>
            </Input_box>  
            <Input_box  htmlFor='userid'>관리자: 
              <Input  type="text" value={userId} onChange={(e)=> {
                setUserId(e.target.value);
              }} ></Input></Input_box>
            <Button onClick={()=> {
              register();
            }}> 등록하기</Button> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default BuildingRegister;