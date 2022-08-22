import React from 'react';
import styled from 'styled-components';

const TableRow = ({ children }) => {
  
  let Td = styled.td`
    cursor: pointer;
  `
  return (
    <Td className="common-table-column">
      {
        children
      }
    </Td>
  )
}

export default TableRow;