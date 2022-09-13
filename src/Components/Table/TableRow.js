import React from 'react';
import styled from 'styled-components';

let Tr = styled.tr`
    cursor: pointer;
    &:hover{  
      background-color : #E8E8E8;
      color : black;
    }
  `

const TableRow = ({ children }) => {
  return (
    <Tr className="common-table-row">
      {
        children
      }
    </Tr>
  )
}

export default TableRow;