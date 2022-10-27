import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import styled from 'styled-components';
import Navigation from '../../Components/Layout/Navigation';
import axios from 'axios';
import Search from './Search';
import Button from 'react-bootstrap/Button';

import Table from '../../Components/Table/Table';
import TableColumn from '../../Components/Table/TableColumn';
import TableRow from '../../Components/Table/TableRow';
import { propTypes } from 'react-bootstrap/esm/Image';

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
  background-color:#FAFAFA;
  font-size: 50px;
  padding:0;
  margin:0 0 0 20px;
`
let Content_box=styled.div`
  widith: auto;
  height: 500px;
  background-color: #FAFAFA;
  display:flex;
  justify-content: center;
  flex-direction: column;
`

let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #FAFAFA;
  height: 71.5vh;
`
let Menu = styled.div`
  border: solid 3px;
  width: 200px;
  font-size: 20px;
  font-weight: 1000;
  border-radius: 20px;
  margin: 20px 10px;
`
let Input_box = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background-color:#FAFAFA;
  margin: 5px;
  font-size: 20px;
  flex-direction: column;
`
let Input = styled.div`
  padding: 2px;
  width: 400px;
  margin: 0 10px;
  border: solid 1px;
  border-radius: 10px;
`

let Input_name =  styled.div`
  width : 200px;
  border : solid 1px;
`
let Uuid = styled.button`
  padding: 2px;
  width: 100px;
  margin: 0 10px;
  border: solid 1px;
  border-radius: 10px;
`

let Register_button = styled.button`
  width: 100px;
  border-radius: 10px;
  background-color:  #0F4C75;
  color: white;
`
let Flex = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #FAFAFA;
  width: 1000px;
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
const facility = localStorage.getItem('facilityName');
const facilityNum = localStorage.getItem('facilityNum');
const uuid = localStorage.getItem('managerUuid');
function GetData() {
  const [data,setData] = useState([]);
  

  // 관리자 리스트
  useEffect(() => {
    axios
      .get('http://jlchj.iptime.org:8000/facility-service/join/manager/'+ facilityNum )
      .then((response)=> {
        setData(response.data);
        console.log(response);
    })
    .catch(error => {
      // 서버 통신 실패시
        console.log(error);
      });
  }, []);
  // 관리자 리스트 삭제
  const onRemove = managerName => {
      setData(data.filter(data => data.managerName !== managerName));
    }
  // Object값만큼 반복문을 사용하여 리스트 구현  
    const item = (Object.values(data)).map((item,i) => (
      <TableRow key = {data[i].managerName}>
          <TableColumn>{i+1}</TableColumn>
          <TableColumn> {item.managerName}</TableColumn> 
          <TableColumn>{item.facilityName}</TableColumn>
          <TableColumn>{item.managerPhoneNumber}</TableColumn>
          <TableColumn>{item.managerGrade}</TableColumn>
          <TableColumn>
            <Button variant="outline-danger"
              onClick={()=> {
                console.log(data[i].managerGrade);
                if(data[i].managerGrade === '매니저') {
                  axios
                    .get('http://jlchj.iptime.org:8000/manager-service/change/grade/'+ uuid + '/' + data[i].managerUuid + '/' + facilityNum + '/마스터')
                    .then(()=> {
                      console.log('성공');
                      alert('직급이 변경되었습니다')
                      console.log(uuid);
                      console.log(data[i].managerUuid);
                      console.log(data[i].managerGrade);
                      window.location.reload();
                    })
                    .catch(error => {
                      alert('권한이 없습니다');
                      console.log(error);
                      
                    })
                }
                else if(data[i].managerGrade == '마스터') {
                  axios
                    .get('http://jlchj.iptime.org:8000/manager-service/change/grade/'+ uuid + '/' + data[i].managerUuid + '/' + facilityNum + '/매니저')
                    .then(()=> {
                      console.log('성공');
                      alert('직급이 변경되었습니다')
                      console.log(uuid);
                      console.log(data[i].managerUuid);
                      console.log(data[i].managerGrade);
                      window.location.reload();
                    })
                    .catch(error => {
                      alert('권한이 없습니다');
                      console.log(error);
                      
                    })
                }
                else {
                  alert('권한이 없습니다');
                }
              }} 
              >변경</Button>    
            <Button variant="outline-danger" 
              onClick={() =>{ 
                 //삭제 버튼 클릭시 리스트 삭제
                axios
                    .get('http://jlchj.iptime.org:8000/facility-service/join/delete/'+ facilityNum +'/' + uuid + '/' + data[i].managerUuid)
                    .then(()=> {
                      console.log('성공');
                      alert('삭제되었습니다');
                      window.location.reload();
                    })
                    .catch(error => {
                      alert('권한이 없습니다');
                    })
                }
              }>삭제</Button>
              
          </TableColumn>
          
      </TableRow>
    ));

    return item;

}

function ManagerRegister(props) {

  const [findOn, setFindModalOn] = React.useState(false);
  const item = GetData();
  const registerManager = localStorage.getItem('registerManager');
  const facilityNum = localStorage.getItem('facilityNum');
  const facilityName = localStorage.getItem('facilityName');
  let navigate = useNavigate();
  // 관리자 등록 
  const register = () => {
  // axios를 활용하여 관리자를 등록할 때 필요한 값 POST
    axios
    .post('http://jlchj.iptime.org:8000/facility-service/join/manager', {
      uuid: registerManager,
      facilityNum : facilityNum,
    })
    .then(response => {
    // 서버 통신 성공시
      alert('매니저가 등록되었습니다');
      
    })
    .catch(error => {
    // 서버 통신 실패시
      alert(error.response.data);
    });
  }
      
  return(
    <>
    <Div>
      <Header/>
        <Body>
          <Box1><Navigation/>
            <Menu_ul onClick={()=>{navigate('/banner')}}>{facility}</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/notice')}}>공지사항</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/post')}}>안전소통게시판</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/report')}}>신고현황</Menu_ul>
          </Box1>
          <Box2><Title_box>직원 및 시설관리<Button variant="outline-danger"
            onClick={()=> {
              if(window.confirm('삭제하시면 복구할 수 없습니다. \n 정말로 삭제하시겠습니까?')){
                axios
                .post('http://jlchj.iptime.org:8000/facility-service/delete', {
                  facilityNum: facilityNum,
                  managerUuid: uuid,
                })
                .then(reponse => {
                  alert("삭제되었습니다.");
                  navigate('/BuildingList');
                  console.log(facilityNum);
                  
              })
              .catch(error => {
                alert('시설물 삭제를 실패하였습니다.');
                console.log(facilityNum);
              })
              }
              else {
                alert("취소합니다.");
              }
              
            }}>시설물 영구 삭제</Button></Title_box><hr></hr>
          <Content_box>
            <Menu>
              관리자
            </Menu>
            <Table headersName={['No', '이름', '담당위치', '전화번호','직급', '관리']}>
                  {item}
              </Table>
            
            <Menu>
              추가
            </Menu>
            <Input_box>
            <Flex> 등록할 관리자 :<Input_name>{localStorage.getItem('registerName')}</Input_name><Uuid type="button" onClick={()=> setFindModalOn(true)}>검색하기</Uuid> {/* 검색하기 버튼 클릭시 검색모달창 구현 */}
              <Search
                  show = {findOn}
                  onHide={() => setFindModalOn(false)}
                />
              시설물명: <Input> {facilityName}</Input>
            </Flex>
            <Register_button onClick={() => {
              register();
              window.location.reload();
            }}>등록하기                  {/* 등록하기 버튼 클릭시 관리자 등록 */}
            </Register_button>
            </Input_box> 
            
          </Content_box>
         </Box2>
          
        </Body>
        <Footer/>
    </Div>
    </>
    
    
  );
}

export default ManagerRegister;
