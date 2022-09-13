import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import PopupDom from '../Components/PopupDom';
import PopupPostCode from '../Components/PopupPostCode';
import { propTypes } from 'react-bootstrap/esm/Image';
import DaumPostcode from "react-daum-postcode";
 

const Div = styled.div`
background-color: #FAFAFA;
`

const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:0;
background-color:#FAFAFA;
height: 79.9vh;
`

  const Box1 = styled.div`
  width: 400px;
  height: 80vh;
  background-color:#FAFAFA;
  margin: 0 ;
  padding-top:300px;
`

const Box2 = styled.div`
  width: 1300px;
  background-color:#FAFAFA;
  margin: 0 ;
  display: flex;
  flex-direction: column;
  height: 80vh;
`
const Title_box = styled.div`
widith: auto;
height: auto;
display: flex;
justify-content: flex-start;
background-color:#FAFAFA;
font-size: 50px;
padding:0;
margin: 200px 0 0 20px;
    
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


const Input_box = styled.label`
  display:flex;
  justify-content: flex-end;
  width: 550px;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 20px;
  
`
const Input = styled.input`
  margin: 0 0 0 10px;
  padding: 2px;
  width: 450px;
  border-radius: 8px;
  border: 3px solid #727272;
`
const Button = styled.button`
margin: 10px;
font-size: 20px;
color: white;
background-color: #0F4C75;
`

const AddressBox = styled.div`
  margin: 0 0 0 10px;
  padding: 2px;
  width: 300px;
  border-radius: 8px;
  border: 3px solid #727272;
`

const AddressButton = styled.button`
  margin: 0 0 0 10px;
  padding: 2px;
  width: auto;
  border-radius: 8px;
  border: 3px solid #727272;
`

function BuildingRegister() {
 const [facilityName, setFacilityName] = useState('');
 const facilityAddress = localStorage.getItem('facilityAddress');
 const [userId, setUserId] = useState(localStorage.getItem('managerUuid'));
 const [fix,setFix] = useState('');

 const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

 const register = () => {

    console.log(facilityName);
    console.log(facilityAddress);
    console.log(userId);
    
    if(facilityName.length >= 1) {

      axios
    .post('http://203.250.32.29:2200/api/facility/register', {
      facilityName: facilityName,
      facilityAddress: facilityAddress,
      facilityOwner: userId,
    })
    .then(response => {
      // Handle success.
      console.log('시설물등록완료');
      alert('시설물이 등록되었습니다.');
      
    })
    .catch(error => {
      // Handle error.
      console.log(error.response);
      alert(error.response.data);
    });

    }

    else if(facilityName.length == 0) {
      alert('시설물명을 입력해주세요');
    }
    
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
         
            <Input_box>
            주소: <AddressBox></AddressBox>
              <AddressButton type='button' onClick={()=>{openPostCode(); setFix(facilityAddress);}}>우편번호 검색</AddressButton>
            </Input_box> 
            
            <div id = 'popupDom'>
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose = {closePostCode} />
                </PopupDom>
              )}
            </div>
       
 {/*           <Input_box  htmlFor='facility_address'>위치: 
              <Input  type="text"  value={facilityAddress} onChange={(e)=> {
                 setFacilityAddress(e.target.value);
              }}></Input>
            </Input_box>  
*/}            
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