import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

/********************페이지 기본 메뉴 리스트****************/

function Navigation() {
  let navigate = useNavigate();

let Menu_ul = styled.ul`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 170px;
  margin:0;
  padding:5px;
  border-bottom: 2px solid  grey;
  cursor: pointer;
  &:hover {
    background-color :  #0F4C75;
    color: white;
  }
`
  return(
    <>
      <Menu_ul onClick={()=>{navigate('/mypage')}}>계정관리</Menu_ul>
      <Menu_ul onClick={()=>{navigate('/BuildingList')}}>시설물리스트</Menu_ul>
      <Menu_ul onClick={()=>{navigate('/register/building'); localStorage.removeItem('facilityAddress');}}>시설물등록</Menu_ul>
      
    </>
    
  );
}

export default Navigation;