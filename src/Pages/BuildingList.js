import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate,NavLink, Navigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';

import Table from '../Components/Table';
import TableColumn from '../Components/TableColumn';
import TableRow from '../Components/TableRow';
import Banner from './MainBanner';

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

  let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;
  `

  function GetData() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    const uuid = localStorage.getItem('managerUuid');
    console.log(uuid);

    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/join/'+ uuid +'/mg/list')
        .then((response)=> {
          console.log(response.data);
          console.log(response.data[0].facilityName);
          console.log(response.data[0].useFacility);
          console.log(response.data[0]);
          localStorage.setItem('facility',response.data[0]);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
  
     
    const item = (Object.values(data)).map((item,i) => (
      <TableRow key = {item.i}>
          <TableColumn>{i+1}</TableColumn>
          <TableColumn><NavLink to={'/banner'}>{item.facilityName}</NavLink></TableColumn>
          <TableColumn>{item.name}</TableColumn>
        <TableColumn><button>삭제</button></TableColumn>
      </TableRow>
    ));
  
    return item; 

  }



function BuildingList() {

  const item = GetData();

      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>시설물리스트</Title_box><hr></hr>
            <Content_box>
                <Table headersName={['No', '시설물명', '관리자', '삭제']}>
                  {item}
              </Table>
            </Content_box>
           </Box2>
        </Body>
        <Footer/>
    </Div>
    </>


        
    
  );
}

export default BuildingList;