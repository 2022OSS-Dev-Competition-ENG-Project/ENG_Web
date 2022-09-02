import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

function Navigation() {
  let navigate = useNavigate();

  let Menu = styled.div`

`  
let Menu_ul = styled.ul`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 150px;
  margin:0;
  padding:0;
  border-bottom: 5px solid #0F4C75 ;
  margin:5px;
  cursor: pointer;
`
  return(
    <>
      <Menu_ul onClick={()=>{navigate('/BuildingList')}}>시설물리스트</Menu_ul>
      <Menu_ul onClick={()=>{navigate('/register/building')}}>시설물등록</Menu_ul>
      <Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul>
    </>

 
    
  );
}

export default Navigation;