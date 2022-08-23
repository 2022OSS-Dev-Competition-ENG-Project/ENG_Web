import React from 'react';
import styled from 'styled-components';

function Navigation() {

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
`
  return(
    <>
      <Menu_ul>건물리스트</Menu_ul>
      <Menu_ul>건물등록</Menu_ul>
    </>

 
    
  );
}

export default Navigation;