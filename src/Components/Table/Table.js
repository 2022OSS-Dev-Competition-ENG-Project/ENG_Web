import React from 'react';
import styled from 'styled-components';

let List = styled.table`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-spacing: 0;
`

let Td = styled.td`
  border-bottom: 1px solid #e8e8e8;
  padding: 0;
  font-size: 16px;
  padding: 10px 5px;
  font-weight: bold;
  
`

const Table = props => {
  const { headersName, children } = props;

  return (
    <List>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <Td  key={index}>{ item }</Td>
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
    </List>
  )
}

export default Table;