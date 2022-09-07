import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import axios from 'axios';

import Table from '../Components/Table';
import TableColumn from '../Components/TableColumn';
import TableRow from '../Components/TableRow';

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
  justify-content: space-between;
  align-items: flex-end;
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


  let Select = styled.select`
    width:100px;
    height: 30px;
    margin: 10px 20px;
    font-size:20px;
  `

  let Option = styled.option`
    font-size:20px;
  `
  
  let Hr = styled.hr`
    margin: 0;
  `
  let Menu_ul = styled.ul`
    background-color:#FAFAFA;
    font-size: 20px;
    width: 150px;
    margin:0;
    padding:0;
    border-bottom: 5px solid #0F4C75 ;
    margin:5px;
    cursor: pointer;
  `

  


  function GetData() {
    const [data, setData] = useState([]);
    
    const facilityNo = localStorage.getItem('facilityNo');
    
    useEffect(() => {
       {/*  203.250.32.29:2200/api/report/list/{facilityNo}/{reportStatus}*/}
      axios
        .get('http://203.250.32.29:2200/api/report/list/247f9839-53a4-426c-994d-878f1c05d47b/0')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
      })
    }, []);
    
    
     
    const item = (Object.values(data)).map((item) => (
      <TableRow key = {item.reportNum}>
        <TableColumn>{item.reportNum}</TableColumn>
        <TableColumn>{item.reportTitle}</TableColumn>
        <TableColumn>{item.reportType}</TableColumn>
        <TableColumn>{item.userNickname}</TableColumn>
        <TableColumn>{item.reportDate}</TableColumn>
      </TableRow>
    ));
  
    return item; 

  
  }
    

function ReportList() {

  const item = GetData();
  let navigate = useNavigate();

  const selectList = ["처리", "미처리"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>
          <Box2>
            <Title_box>신고현황
              <Select onChange={handleSelect} value={Selected}>
              {selectList.map((status) => (
                <Option value={status} key={status}>{status}
                </Option>
              ))}</Select>
              </Title_box><Hr></Hr>
            <Content_box>
              <Table headersName={['번호', '제목', '종류', '작성자', '작성일']}>
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

export default ReportList;