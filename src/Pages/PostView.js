import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import axios from 'axios';
import {useParams} from 'react-router-dom';


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
    width: 300px;
    height: auto;
    background-color: #FAFAFA;
    margin: 0 ;
    padding-top:120px
  `

  let Box2 = styled.div`
    width: 1300px;
    height: 800px;
    background-color: #FAFAFA;
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

  let Comment_box= styled.div`
    widith: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color:#FAFAFA;
    padding:0;
  `
  let Comment_title= styled.div`
    font-size: 25px;
  `

  let Comment = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #FAFAFA;
  `
  let Comment_user = styled.div`
    display:flex;
    justify-content: flex-start;
    font-size:20px;
    width: auto;
    background-color: #FAFAFA;
    opacity: 100%;
  `
  let Comment_buttonbox = styled.div`
  `
  let Comment_button = styled.button`
    margin: 5px;
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
    justify-content: flex-start;
    flex-direction: column;
    padding: 5px 0 0 20px;
  `
  let Title =  styled.div`
    font-size: 25px;
    background-color:#FAFAFA;
    display:flex;
    justify-content: flex-start;
  `
  let Post = styled.div`
    font-size: 25px;
    height: 500px;
    background-color:#FAFAFA;
  `
  let Hr = styled.hr`
    margin: 0;
    padding: 0;
  `
  let Upload_box = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    background-color: #FAFAFA;
  `
  let Master = styled.div`
    font-size:20px;
    width: 100px;
    background-color: #FAFAFA;
    padding: 0;
  `
  let Upload = styled.input`
    width:1080px;
  `

  function GetData(itemI) {
    const [data, setData] = useState({});
    const uuid = localStorage.getItem('managerUuid');
    useEffect(() => {
      axios
        .get('http://203.250.32.29:2200/api/facility/content/'+uuid+'/'+ itemI)
        .then((response)=> {
          console.log(response.data);
          console.log('성공');
          setData(response.data);
          
          
      })
    }, []);

    const item = (<>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/></Box1>
          <Box2>
            <Title_box>
              <Box>게시물</Box>
              <Button_box>
                <Button>삭제</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box><Title><h2>{data.contentTitle}</h2> </Title><Post>{data.contentText}</Post></Content_box>
            <Hr></Hr>
          </Box2>
        </Body>
        <Footer/>
    </Div>
    </>)

  return item;

  }
function PostView() {
  const{itemI} = useParams();
  const item = GetData(itemI);


  return(
    <>
      <div>
        {item}
      </div>
    </>
  );
}

export default PostView;