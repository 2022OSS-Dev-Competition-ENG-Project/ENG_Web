import React from 'react';
import styled from 'styled-components';

function Navigation() {

  let Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: White;
  width: 250px;
  height: 80vh;
  margin-left: 50px;
  float: left;
`  
let Menu_button = styled.ul`
  background-color:white;
  font-size: 30px;
  margin:0;
  padding:0;
`
  return(
    <Menu>
      <Menu_button>Navigation</Menu_button>
    </Menu>
    
  );
}

export default Navigation;