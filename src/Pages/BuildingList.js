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
    axios.get('http://localhost:10001/api/facility/content/asdadasd/2').then((response)=> {
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

  let Div = styled.div`
  background-color: #FAFAFA;
`
  
    let Box1 = styled.div`
    width: 300px;
    height: auto;
    background-color: #FAFAFA;
    margin: 0 ;
    padding-top:120px
  `

  let Box2 = styled.div`
    width: 1300px;
    height: 70vh;
    background-color:#FAFAFA;
    margin: 0 ;
    display: flex;
    flex-direction: column;
  `
  let Title_box = styled.div`
  widith: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  background-color:#FAFAFA;
  font-size: 50px;
  padding:0;
  margin:0 0 0 20px;
      
  `
  let Content_box=styled.div`
  widith: auto;
  height: auto;
  background-color: #FAFAFA;
  display:flex;
  align-items: flex-start;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;
  `

      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2><Title_box>시설물리스트</Title_box><hr></hr><Content_box></Content_box></Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default BuildingList;