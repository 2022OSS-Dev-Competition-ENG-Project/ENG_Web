import {React, useEffect, useState} from 'react';
import DaumPostcode from "react-daum-postcode";
 
function PopupPostCode(props) {
  
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.jibunAddress;
        let extraAddress = ''; 
        
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data);
        console.log(fullAddress);
        console.log(data.jibunAddress);
        props.onClose();
        localStorage.setItem('facilityAddress', data.jibunAddress);
      
    }
 
    const postCodeStyle = {
        position: "absolute",
        top: "20%",
        left: "25%",
        width: "500px",
        height: "600px",
        border: "2px solid",
      };

    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} autoclose />
            {/*<button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>*/}
        </div>
    )  
}
 
export default PopupPostCode;