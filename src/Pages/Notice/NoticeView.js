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
background-color: #C6C6C6;
border-radius:  5px;
border-style:none;
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
  margin-bottom : 20px;
  margin-right: 15px;
  align-items: flex-end;
`

let Date = styled.div`
 font-size: 20px;
 margin-right:  10px;
`
let Post = styled.div`
  font-size: 25px;
  background-color:#FAFAFA;
  flex-direction: column;
  width: 1100px;
`
let Text = styled.div`
  width: auto;
  text-align: left
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

  let Img = styled.img`
  background-color:#FAFAFA;
  font-size: 20px;
  width: 300px;
  margin:50px;
  
  `

function GetData(itemI) {
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const uuid = localStorage.getItem('managerUuid');
  const useFacility = localStorage.getItem('useFacility');
  

  useEffect(()=> {
    axios.get('http://203.250.32.29:2200/api/facility/content/'+uuid+'/'+ itemI)
    .then((response)=> {
      console.log(response.data);
      setData(response.data);
      
    })
  },[]);

  const item = (<>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/><Menu_ul onClick={()=>{navigate('/register/manager')}}>관리자등록</Menu_ul></Box1>
          <Box2>
            <Title_box>
              <Box>공지사항</Box>
              <Button_box>
                <Button type="button" onClick={()=> {
                   if(window.confirm('삭제하시면 복구할 수 없습니다. \n 정말로 삭제하시겠습니까?')){
                    axios
                     .get('http://203.250.32.29:2200/api/facility/content/delete/mg/'+useFacility+'/'+itemI)
                     .then((response)=> {
                        alert("삭제되었습니다.");
                        navigate('/notice');
                        
                     })
                     .catch(error => {
                      alert('게시물삭제를 실패하였습니다.')
                      
                     })
                  } else {
                    alert("취소합니다.");
                  }

                }}>삭제</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box><Title><h2>{data.contentTitle}</h2><Date>등록일 : {data.contentDate}</Date> </Title>
            <Post><Text>{data.contentText}</Text><Img src={data.contentImg}></Img></Post></Content_box>
          </Box2>
        </Body>
        <Footer/>
    </Div>
  
  </>)
  
  return item;
}

function NoticeView() {
  
  const{itemI} = useParams();
  const item = GetData(itemI);

  return (<>
    <div>
      {item}
    </div>
  </>);
}
export default NoticeView;