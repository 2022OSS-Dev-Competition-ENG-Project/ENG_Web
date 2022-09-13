import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate, NavLink} from 'react-router-dom';
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

  let WriteButton = styled.button`
    width: 100px;
    font-size: 20px;
    height: 50px;
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

const StyledNavLink = styled(NavLink)`
    color:black;
    text-decoration: none;
  `


  function GetData() {
    const [data, setData] = useState([]);
    const useFacility = localStorage.getItem('useFacility');
    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/content/'+ useFacility +'/1/0/list')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
           
      })
    }, []);
      
    const item = (Object.values(data)).map((item) => (
      <TableRow key = {item.contentNum}>
        <TableColumn>{item.contentNum}</TableColumn>
        <TableColumn>
          <StyledNavLink to={`/notice/${item.contentNum}`} >{item.contentTitle}</StyledNavLink>
        </TableColumn>
        <TableColumn>{item.name}</TableColumn>
        <TableColumn>{item.contentDate}</TableColumn>
      </TableRow>
    ));
  
    return item; 
  
  }
    
function NoticeList() {

  const item = GetData();
  let navigate = useNavigate();
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>
          <Box2>
            <Title_box>공지사항<WriteButton onClick={()=> {navigate('/notice/write')}}>작성하기</WriteButton></Title_box><hr></hr>
            <Content_box>
              <Table headersName={['글번호', '제목', '작성자', '등록일']}>
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

export default NoticeList;