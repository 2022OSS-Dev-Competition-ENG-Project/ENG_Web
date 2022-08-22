import React from 'react';
import styled from 'styled-components';


  const TableColumn = ({ children }) => {

    let Td = styled.td`
    padding: 10px 5px;
    `
    return (
      <Td>
        {
          children
        }
      </Td>
   )
  }

export default TableColumn;