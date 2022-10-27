import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate, NavLink} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';

import Table from '../../Components/Table/Table';
import TableColumn from '../../Components/Table/TableColumn';
import TableRow from '../../Components/Table/TableRow';

  let Div = styled.div`
    background-color: #FAFAFA;
  `
  let Box1 = styled.div`
    width: 200px;
    height: auto;
    background-color: #FAFAFA;
    margin: 0 ;
    padding-top:120px
  `

  let Box2 = styled.div`
    width: 1300px;
    height: 71.5vh;
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

  let Menu_ul = styled.ul`
    background-color:#FAFAFA;
    font-size: 20px;
    width: 170px;
    margin:0;
    padding:5px;
    border-bottom: 2px solid  grey;
    cursor: pointer;
    &:hover {
      background-color :  #0F4C75;
      color: white;
    }
  `

  const StyledNavLink = styled(NavLink)`
    color:black;
    text-decoration: none;
  `

  const  facility = localStorage.getItem('facilityName');

  //안전소통게시판 리스트 불러오는 함수
  function GetData() {
    const [data, setData] = useState([]);
    const facilityNum = localStorage.getItem('facilityNum');

    // axios를 통해 리스트에 필요한값 불러옴
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/content/'+  facilityNum)
        .then((response)=> {
          setData(response.data);
      })
    }, []);
    
    // Object개수만큼 행을 반복하여 리스트 구현
    const item = (Object.values(data)).map((item, i) => (
      <TableRow key = {item.contentNum}>
        <TableColumn>{item.contentNum}</TableColumn>
        <TableColumn>
          <StyledNavLink to={`/post/${item.contentNum}`}>{item.contentTitle}</StyledNavLink>
        </TableColumn>
        <TableColumn>{item.writerNickName}</TableColumn>
        <TableColumn>{item.contentDate.substring(0,10)}</TableColumn>       {/* 등록일만 보이도록 substring이용 */}
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
          <Box1><Navigation/>
            <Menu_ul onClick={()=>{navigate('/register/manager'); localStorage.removeItem('registerName');}}>직원관리</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/banner')}}>{facility}</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/notice')}}>공지사항</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/report')}}>신고현황</Menu_ul>
          </Box1>     {/* 메뉴바에 메뉴 추가 */}
          <Box2>
            <Title_box>안전소통게시판</Title_box><hr></hr>                                                           {/* 공지작성 페이지로 이동 */}
            <Content_box>
              <Table headersName={['글번호', '제목', '작성자', '등록일']}>      {/* 리스트 항목들 */}
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

export default PostList;