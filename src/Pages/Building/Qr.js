import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import Navigation from "../../Components/Layout/Navigation";
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
let Content_box=styled.div`
  widith: auto;
  height: auto;
  background-color: #FAFAFA;
  display:flex;
  justify-content: center;
  padding: 70px 0 0 20px;
  align-items:center;
  font-size: 30px;
`

let Text_box =  styled.div`
  width: 500px;
  font-weight: 600;
`

let Hr = styled.hr`
  margin: 0;
  padding: 0;
`

let Img = styled.img`
  width: 200px;
`


function GetData(itemI) {
  const [data, setData] = useState({});
  const facilityName = localStorage.getItem('facilityName');
  const facilityAddress = localStorage.getItem('facilityAddress');

  useEffect(()=> {
    axios
    .post('http://203.250.32.29:2200/api/facility/qr/getUrl', {
      facilityName: facilityName,
      facilityAddress: facilityAddress,
    })
    .then((response)=> {
      console.log(response);
      console.log('성공');
      setData(response.data);
    })
  },[]);

  const item = (<>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>
              <Box>QR</Box>
            </Title_box><Hr></Hr>
            <Content_box>
              <Img src={data} width></Img>
              <Text_box>방문자들이 잘 볼 수 있는 곳에 해당 QR코드를 프린트하여 붙이십시오</Text_box>
            </Content_box>
          </Box2>
        </Body>
        <Footer/>
    </Div>
  
  </>)
  
  return item;
}

function Qr() {
  const{itemI} = useParams();
  const item = GetData(itemI);

  return (<>
    <div>
      {item}
    </div>
  </>);
}
export default Qr;