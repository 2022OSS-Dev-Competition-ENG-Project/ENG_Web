import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import Navigation from "../../Components/Layout/Navigation";
import axios from 'axios';
import { useParams, useNavigate, Navigate } from 'react-router-dom';


let Div = styled.div`
  background-color: #FAFAFA;
`

let Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
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
let Title_box= styled.div`
  widith: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color:#FAFAFA;
  font-size: 50px;
  padding:0;
  margin:0 0 0 20px;
`
let Box = styled.div`
  margin: 0;
  padding: 0;
`
let Button_box = styled.div`
  margin: 0;
  padding: 0;
` 
let Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
  color: black;
  background-color: white;
  border-radius:  5px;
  border-style: 1px solid #C6C6C6;
`
let Content_box=styled.div`
  widith: auto;
  height: auto;
  background-color: #FAFAFA;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 0 0 20px;
`
let Title =  styled.div`
  font-size: 25px;
  background-color: #EFEFEF;
  height: 90px;
  width: 1280px;
  display:flex;
  justify-content: space-between;
  color: ##100F0F;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: solid 2px grey;
  margin-bottom : 5px;
  margin-right: 15px;
  align-items: flex-end;
`
let Post = styled.div`
  font-size: 25px;
  background-color:#FAFAFA;
  flex-direction: column;
  width: 1200px;
`
let Hr = styled.hr`
  margin: 0;
  padding: 0;
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
let Text = styled.div`
  width: auto;
  text-align: left;
  background-color: #FAFAFA;
`
let Img = styled.img`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 300px;
  margin:50px;
`

let Date = styled.div`
 font-size: 20px;
 margin-right:  10px;
`

let Info = styled.div`
 font-size: 20px;
 float: right;
 width: 1250px;
 display: flex;
 justify-content: flex-end;
 background-color: #FAFAFA;
 margin-bottom: 20px;
`
let Img_box = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`
//서버로 부터 데이터를 불러옴
function GetData(itemI) {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [image, setImage] = useState("");

  //axios를 통해 공지글에 필요한 데이터를 불러옴
  useEffect((props)=> {
    axios.get('http://203.250.32.29:2200/api/report/' + itemI)
    .then((response)=> {
      setData(response.data);
      setImage(response.data.reportImg);
      
    })
  },[]);

  let arr = image.split(" ");                          //띄어쓰기 기준으로 문자열 나누기

  const item =  (
  <>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>     {/* 메뉴바에 관리자 등록항목 추가 */}
          <Box2>
            <Title_box>
              <Box>신고현황</Box>
              <Button_box>
                {/* 신고처리 버튼 클릭시 */}
                <Button type="button" onClick={()=> {
                    axios
                     .get('http://203.250.32.29:2200/api/report/'+ itemI +'/1')
                     //서버 통신 성공시
                     .then((response)=> {
                        alert("처리완료");
                        navigate('/report'); //신고리스트로 페이지 이동
                     })
                     //서버 통신 실패시
                     .catch(error => {
                      alert('처리실패')
                     })
                  }}>처리</Button>
                 {/* 신고반려 버튼 클릭시 */} 
                <Button type="button" onClick={()=> {
                    axios
                     .get('http://203.250.32.29:2200/api/report/'+ itemI +'/2')
                     //서버 통신 성공시
                     .then((response)=> {
                        alert("반려완료");
                        navigate('/report'); //신고리스트로 페이지 이동
                     })
                     //서버 통신 실패시
                     .catch(error => {
                      alert('반려실패')
                     })
                }}>반려</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box>
              <Title><h2>{data.reportTitle}</h2> </Title>                                         {/* 신고글 제목 불러옴 */}
              <Info><Date>등록일 : {data.reportDate}  신고종류: {data.reportType}</Date></Info>   {/* 신고 등록일, 종류을 불러옴 */}
              <Post><Text>{data.reportText}</Text><Img_box><Img src={arr[0]}></Img><Img src={arr[1]}></Img><Img src={arr[2]}></Img></Img_box></Post></Content_box>  {/* 신고 사진 불러옴*/}
          </Box2>
        </Body>
        <Footer/>
    </Div>
  
  </>)
  
  return item;
}

function ReportView() {
  
  const{itemI} = useParams();
  const item = GetData(itemI);

  return (<>
    <div>
      {item}
    </div>
  </>);
}
export default ReportView;