import {React, useState} from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import PopupDom from '../../Components/Address/PopupDom';
import PopupPostCode from '../../Components/Address/PopupPostCode';
import { useNavigate } from 'react-router-dom';


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
 let navigate = useNavigate();

	// ????????? ??????
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// ????????? ??????
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

 const register = () => {

    console.log(facilityName);
    console.log(facilityAddress);
    console.log(userId);
    
    // ???????????? ????????? ????????????
    if(facilityName.length >= 1) {
    
    // ????????? ????????? ????????? ????????? POST???
    axios
    .post('http://jlchj.iptime.org:8000/facility-service/register', {
      managerUuid: userId,
      facilityName: facilityName,
      facilityAddress: facilityAddress,
    })
    .then(response => {
      // ????????? ?????? ?????????
      console.log('?????????????????????');
      alert('???????????? ?????????????????????.');
      navigate('/BuildingList');
    })
    .catch(error => {
      // ????????? ?????? ?????????
      console.log(error.response);
      alert(error.response.data);
    });

    }
    // ??????????????? ???????????? ????????????
    else if(facilityName.length == 0) {
      alert('??????????????? ??????????????????');
    }
    
 }

      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>???????????????</Title_box><hr></hr>
          <Content_box>
            <Input_box htmlFor='facility_name'>????????????: 
              <Input type="text"  value={facilityName} onChange={(e)=> {            // onChange ????????? ?????? ????????? ??????
                setFacilityName(e.target.value);
              }}></Input>
            </Input_box>
         
            <Input_box>
            ??????: <AddressBox>{localStorage.getItem('facilityAddress')}</AddressBox>  
              <AddressButton type='button' onClick={()=>{openPostCode();}}>???????????? ??????</AddressButton>      {/* ?????? ????????? ????????? */}
            </Input_box> 
            
            <div id = 'popupDom'>
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose = {closePostCode} />                                                    {/* ?????? ????????? ?????? */}
                </PopupDom>
              )}
            </div>        
            <Button onClick={()=> {           // ???????????? ????????? ????????? ??????
              register();
            }}> ????????????</Button> 
          </Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default BuildingRegister;