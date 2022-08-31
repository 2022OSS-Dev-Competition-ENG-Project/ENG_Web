import React from 'react';
import styled from 'styled-components';

let Td = styled.td`
    margin: 20px 0;
    
  `

let Hr = styled.hr `
  width: 300px;
`


const TableColumn = ({ children }) => {
  return (
    <>
          <Td className="common-table-column">
      {
        children
        
      }
      <Hr></Hr>
    </Td>
    </>

  )
}

export default TableColumn;