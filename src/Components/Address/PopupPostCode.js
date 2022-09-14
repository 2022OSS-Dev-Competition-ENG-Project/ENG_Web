import React from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';

let Button = styled.button`
  border: none;
`
 
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
      
        props.onClose();
        localStorage.setItem('facilityAddress', data.jibunAddress);
      
    }
    
  /*******팝업의 위치 및 디자인*******/
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
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} autoclose /> {/* 주소검색완료시 자동으로 팝업창닫김 */}
        </div>
    )  
}
 
export default PopupPostCode;