import {React, useState} from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import PopupDom from '../../Components/Address/PopupDom';
import PopupPostCode from '../../Components/Address/PopupPostCode';


// styled-component
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
  width: 200px;
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
 const [userId, setUserId] = useState(localStorage.getItem('managerUuid'));
 const [isPopupOpen, setIsPopupOpen] = useState(false);
 const facilityAddress = localStorage.getItem('facilityAddress');
 
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
    
    // 시설물명 입력시 등록가능
    if(facilityName.length >= 1) {
    
    // 등록에 필요한 정보를 서버에 POST함
    axios
    .post('http://jlchj.iptime.org:8000/facility-service/register', {
      managerUuid: userId,
      facilityName: facilityName,
      facilityAddress: facilityAddress,
    })
    .then(response => {
      // 서버와 통신 성공시
      console.log('시설물등록완료');
      alert('시설물이 등록되었습니다.');
      
    })
    .catch(error => {
      // 서버와 통신 실패시
      console.log(error.response);
      alert(error.response.data);
    });

    }
    // 시설물명을 입력하지 않았을시
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
              <Input type="text"  value={facilityName} onChange={(e)=> {            // onChange 함수를 통해 입력값 변경
                setFacilityName(e.target.value);
              }}></Input>
            </Input_box>
         
            <Input_box>
            주소: <AddressBox>{localStorage.getItem('facilityAddress')}</AddressBox>  
              <AddressButton type='button' onClick={()=>{openPostCode();}}>우편번호 검색</AddressButton>      {/* 주소 검색창 띄우기 */}
            </Input_box> 
            
            <div id = 'popupDom'>
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose = {closePostCode} />                                                    {/* 주소 검색창 닫기 */}
                </PopupDom>
              )}
            </div>        
            <Button onClick={()=> {           // 등록버튼 클릭시 시설물 등록
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