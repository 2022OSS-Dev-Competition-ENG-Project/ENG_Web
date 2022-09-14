import {React, useEffect, useState} from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
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
    width: 130px;
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
  
//서버로 부터 데이터를 불러옴
function ReportList() {

  let navigate = useNavigate();
  const [reportStatus, setReportStatus] = useState(''); 
  const [Selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const useFacility = localStorage.getItem('useFacility');
  const selectList = ["미처리", "처리"];
  
  // 처리/미처리 선택에 따른 값
  const handleSelect = (e) => {
    setSelected(e.target.value);
    setReportStatus(e.target.value);
  };

  useEffect(() => {
  //axios를 이용한 미처리 신고리스트만 불러옴
   axios
     .get('http://203.250.32.29:2200/api/report/list/'+ useFacility+'/0')
     .then((response)=> {
       setData(response.data);
   })
 }, []);
  //axios를 이용한 처리 신고리스트만 불러옴
  if(reportStatus=='처리') {
    axios
    .get('http://203.250.32.29:2200/api/report/list/'+ useFacility+'/1')
    .then((response)=> {
      setData(response.data);
      
  })
  }
  //axios를 이용한 미처리 신고리스트만 불러옴
  if(reportStatus=='미처리') {
    axios
    .get('http://203.250.32.29:2200/api/report/list/'+ useFacility+'/0')
    .then((response)=> {
      setData(response.data);     
      
  })
  }
  // Object개수만큼 행을 반복하여 리스트 구현
 const item = (Object.values(data)).map((item) => (
   <TableRow key = {item.reportNum}>
     <TableColumn>{item.reportNum}</TableColumn>
     <TableColumn>
      <StyledNavLink to={`/report/${item.reportNum}`} >{item.reportTitle}</StyledNavLink>
     </TableColumn>
     <TableColumn>{item.reportType}</TableColumn>
     <TableColumn>{item.userNickname}</TableColumn>
     <TableColumn>{item.reportDate.substring(0,10)}</TableColumn>
   </TableRow>
 ));

  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>           {/* 리스트 항목들 */}
          <Box2>
            <Title_box>신고현황
              <Select onChange={handleSelect} value={Selected}>                                                         {/* 처리/미처리에 따른 값변환 */}
              {selectList.map((status) => (
                <Option value={status} key={status}>{status}                                                            {/* 리스트 항목들 */}
                </Option>
              ))}</Select>
              </Title_box><Hr></Hr>
            <Content_box>
              <Table headersName={['번호', '제목', '종류', '작성자', '작성일']}>                {/* 리스트 항목들 */}
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