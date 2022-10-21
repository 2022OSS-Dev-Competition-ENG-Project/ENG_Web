import {React, useEffect, useState} from 'react';
import { NavLink} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Navigation from '../../Components/Layout/Navigation';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from '../../Components/Table/Table';
import TableColumn from '../../Components/Table/TableColumn';
import TableRow from '../../Components/Table/TableRow';

// styled-componet
  let Div = styled.div`
    background-color: #FAFAFA;
  `
  let Body = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FAFAFA;
    height: 72vh;
    margin: 100px 0 0 0;
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
  const StyledNavLink = styled(NavLink)`
    color:black;
    text-decoration: none;
  `

  function GetData() {
    const [data, setData] = useState([]);
    const uuid = localStorage.getItem('managerUuid');

    //자신이 관리하는 시설물 불러오기
    
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/join/' + uuid + '/manager/list')
        .then((response)=> {
          setData(response.data); 
          console.log(response);
        })
      }, []);
    
      const onRemove = facilityName => {
        setData(data.filter(data => data.facilityName !== facilityName));     //리스트를 삭제하는 함수
        
      }
      
    
     
    const item = (Object.values(data)).map((item,i) => (                      //서버에서 들어오는 data값만큼 반복하여 리스트 생성
      <TableRow key = {data[i].facilityName}>
          <TableColumn>{i+1}</TableColumn>
          <TableColumn><StyledNavLink to={'/banner'} onClick={()=>             //클릭시 메인 배너로 이동
            {localStorage.setItem('facilityName',data[i].facilityName);  
             localStorage.setItem('facilityNum',data[i].facilityNum);
             localStorage.setItem('facilityAddress',data[i].facilityAddress); }}>
              {item.facilityName}</StyledNavLink>
          </TableColumn>
          <TableColumn>{item.facilityOwnerName}</TableColumn>
        <TableColumn>
          <NavLink to={`/building/${data[i].facilityName}`}><Button variant="outline-secondary"    //해당 건물 클릭시 해당건물의 배너로 넘어가도록 route를 유동적으로 줌
             onClick={()=>{
              localStorage.setItem('facilityNum',data[i].facilityNum);                           //클릭시 로컬스토리지에 건물의 이름과 주소 저장
             }}>QR</Button>
          </NavLink>
          <Button variant="outline-danger" 
            onClick={() =>{ 
              if(window.confirm('삭제하시면 복구할 수 없습니다. \n 정말로 삭제하시겠습니까?')){
                axios
                .get('http://jlchj.iptime.org:8000/facility-service/resignation/manager/' + data[i].facilityNum + '/'+ uuid) 
                .then(()=> {
                  console.log('성공');
                  alert('시설물이 삭제되었습니다');
                  window.location.reload();
                })
                .catch(error => {
                  alert('시설물삭제에 실패하였습니다');
                  console.log(data[i].facilityNum);
                })
              }
              else {
                alert("취소합니다.");
              }  
              }}>삭제</Button>
        </TableColumn>
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
                <Table headersName={['No', '시설물명', '관리자', '관리']}>                 {/*리스트 제목*/}
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