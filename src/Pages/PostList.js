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


  function GetData() {
    const [data, setData] = useState([]);
    const useFacility = localStorage.getItem('useFacility');
    
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/content/'+  useFacility + '/0/0/list')
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    
     
    const item = (Object.values(data)).map((item, i) => (
      <TableRow key = {item.i}>
        <TableColumn>{item.contentNum}</TableColumn>
        <TableColumn>
          <NavLink to={`/post/${item.i}`}>{item.contentTitle}</NavLink>
        </TableColumn>
        <TableColumn>{item.name}</TableColumn>
        <TableColumn>{item.contentDate}</TableColumn>
      </TableRow>
    ));
  
    return item; 

  
  }
    

function PostList() {

  const item = GetData();
  let navigate = useNavigate();
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>게시물<WriteButton onClick={()=> {navigate('/post/write')}}>작성하기</WriteButton></Title_box><hr></hr>
            <Content_box>
              <Table headersName={['글번호', '제목', '작성자', '등록일']}>
                {item}
              </Table>
            </Content_box>
            
          </Box2>
          
        </Body>
  
        
    </Div>
    </>


        
    
  );
}

export default PostList;