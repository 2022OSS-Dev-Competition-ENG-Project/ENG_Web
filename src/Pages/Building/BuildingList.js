import {React, useEffect, useState} from 'react';
import {Routes, Route, useNavigate,NavLink, Navigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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

  const StyledNavLink = styled(NavLink)`
    color:black;
    text-decoration: none;
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
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);
    
    const onRemove = facilityName => {
        setData(data.filter(data => data.facilityName !== facilityName));
        
      }
      
    
     
    const item = (Object.values(data)).map((item,i) => (
      <TableRow key = {data[i].facilityName}>
          <TableColumn>{i+1}</TableColumn>
          <TableColumn><StyledNavLink to={'/banner'} onClick={()=>
            {localStorage.setItem('facilityName',data[i].facilityName);
             localStorage.setItem('useFacility',data[i].useFacility);
             localStorage.setItem('facilityAddress',data[i].facilityAddress); }}>
              {item.facilityName}</StyledNavLink>
          </TableColumn>
          <TableColumn>{item.name}</TableColumn>
        <TableColumn>
          <NavLink to={`/building/${data[i].facilityName}`}><Button variant="outline-secondary"
             onClick={()=>{
              localStorage.setItem('facilityName',data[i].facilityName);
              localStorage.setItem('facilityAddress',data[i].facilityAddress);
             }}>QR</Button>
          </NavLink>
          <Button variant="outline-danger" 
            onClick={() =>{ 
              if(data[i].facilityOwner != data[i].uuid)
                { 
                
                onRemove(data[i].facilityName);
                  axios
                    .get('http://203.250.32.29:2200/api/facility/my/delete/mg/'+ uuid + '/' + data[i].useFacility)
                    .then(()=> {
                      console.log('성공');
                      alert('시설물이 삭제되었습니다')
                    })
                    .catch(error => {
                      alert('시설물삭제에 실패하였습니다')
                    })
               } 
               else if (data[i].facilityOwner == data[i].uuid) {
                alert('자신이 마스터로 관리하는 건물은 삭제할 수 없습니다')
               }
              }
            }>삭제</Button>
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
                <Table headersName={['No', '시설물명', '관리자', '관리']}>
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