import React from 'react';
import styled from 'styled-components';

let Tr = styled.tr`
    cursor: pointer;
    
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