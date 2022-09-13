import React from 'react';
import styled from 'styled-components';

let Td = styled.td`
    border-bottom: 1px solid grey;
    padding: 10px;
  `




const TableColumn = ({ children }) => {
  return (
    <>
          <Td className="common-table-column">
      {
        children
        
      }
    </Td>
    </>

  )
}

export default TableColumn;