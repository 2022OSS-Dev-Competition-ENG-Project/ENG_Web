import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import Navigation from "../../Components/Layout/Navigation";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';


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
    height: 71.5vh;
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
    font-weight: 900;
  `
  let Title =  styled.div`
    font-size: 25px;
    background-color: #EFEFEF;
    height: 90px;
    width: 1280px;
    display:flex;
    justify-content: space-between;
    color: #100F0F;
    padding-left: 15px;
    padding-right: 10px;
    border-bottom: solid 2px grey;
    margin-bottom : 20px;
    margin-right: 15px;
    align-items: flex-end;
  `
  let Post = styled.div`
    font-size: 25px;
    background-color:#FAFAFA;
    flex-direction: column;
    justify-content: flex-start;
    width: 1100px;
  `
  let Hr = styled.hr`
    margin: 0;
    padding: 0;
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
  let Date = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-right:  10px;
`

const  facility = localStorage.getItem('facilityName');
  //????????? ???????????? ??????
  function GetData(itemI) {
    const [data, setData] = useState({});
    let navigate = useNavigate();
    const uuid = localStorage.getItem('managerUuid');
    const facilitynum = localStorage.getItem('facilitynum');

    // axios??? ?????? ???????????? ???????????? ?????????
    useEffect(() => {
      axios
        .get('http://jlchj.iptime.org:8000/facility-service/content/'+uuid+'/'+ itemI)
        .then((response)=> {
          setData(response.data);
          console.log(response);
      })
    }, []);

    const item = (<>
      <Div>
      <Header/>
        <Body>
          <Box1><Navigation/>
            <Menu_ul onClick={()=>{navigate('/register/manager'); localStorage.removeItem('registerName');}}>?????? ??? ????????????</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/banner')}}>{facility}</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/notice')}}>????????????</Menu_ul>
            <Menu_ul onClick={()=>{navigate('/report')}}>????????????</Menu_ul>
          </Box1>  {/* ???????????? ?????? ?????? */}
          <Box2>
            <Title_box>
              <Box>?????????????????????</Box>
              <Button_box>
                <Button type="button" onClick={()=> {
                   if(window.confirm('??????????????? ????????? ??? ????????????. \n ????????? ?????????????????????????')){             //confirm ?????? ?????? ????????? ?????? ?????? ??????
                    axios
                     .get('http://jlchj.iptime.org:8000/facility-service/content/delete/mg/'+ itemI +'/'+ uuid)     //????????? ?????? ??????
                     //???????????? ?????????
                     .then((response)=> {
                        alert("?????????????????????.");
                        navigate('/post');
                        
                     })
                     //???????????? ?????????
                     .catch(error => {
                      alert('?????????????????? ?????????????????????.')
                     })
                     //?????? ?????? ????????????
                  } else {
                    alert("???????????????.");
                  }

                }}>??????</Button>
              </Button_box>
            </Title_box><Hr></Hr>
            <Content_box>
              <Title><h2>{data.contentTitle}</h2> <Date>????????? : {data.contentDate} ?????????: {data.writerNickName}</Date></Title>  {/* ????????? ????????? ?????????,???????????? ????????? */}
              <Post>{data.contentText}</Post></Content_box>           {/* ???????????? ????????? */}
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