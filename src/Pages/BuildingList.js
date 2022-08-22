import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import BTable from '../Components/Table';
import TableColumn from '../Components/TableColumn';
import TableRow from '../Components/TableRow';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <TableRow key={item.id}>
      <TableColumn>{item.id}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>{item.createAt}</TableColumn>
      <TableColumn>{item.username}</TableColumn>
    </TableRow>
  ));

  return item;
}


function BuildingList() {
  let navigate = useNavigate();
  const item = GetData();
  
  let Title_box = styled.div`
      float: left;
      background-color: white;
      margin: 150px 170px 0 230px;
      font-size: 40px;
      font-weight: 900;
      width: auto;
      
  `
    let List_menu = styled.div`
      float: left;
      background-color: #727272;
      margin-left: 150px;
      font-size: 25px;
      font-weight: 900;
      width: 70vw;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      padding: 10px 40px
      border: 5px solid;
    `
    
    let List = styled.div`
     color: white;
     font-size: 25px;
     margin: 5px 20px;
     font-weight:400;
    `

  let Body = styled.div`
    margin:0;
    padding:0;
    width: 100%;
    height: 0vh;
    background-color: pink;
  `

      
  return(
    <>
      <Header /> 
      <Body>
        <Navigation>
        </Navigation>
        <Title_box>공지사항</Title_box>
        <BTable headersName={['글번호', '제목', '등록일', '작성자']}>
           {item}
        </BTable>

{/*       <Table responsive>
          <thead>
            <tr>
              <th>번호</th>
              <th>건물명</th>
              <th>관리자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>대구가톨릭대학교</td>
              <td>000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>대구가톨릭대학교</td>
              <td>000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>대구가톨릭대학교</td>
              <td>000</td>
            </tr>
          </tbody>
        </Table>
*/} 
        
      </Body>

    </>
    
  );
}

export default BuildingList;