import React from 'react';
import styled from 'styled-components';

const BTable = props => {
  const { headersName, children } = props;
  let Table = styled.table`
      width: 70%;
      margin: 0 auto;
      text-align: center;
      border-spacing: 0;
      background-color: grey;
      color: white;
      border-radius: 10px
    `
    let Td = styled.td`
      border-bottom: 1px solid #e8e8e8;
      padding: 0;
      font-size: 16px;
      padding: 10px 5px;
      font-weight: bold;
  `
  return (
    <Table>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <Td key={index}>{ item }</Td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </Table>
  )
}

export default BTable;