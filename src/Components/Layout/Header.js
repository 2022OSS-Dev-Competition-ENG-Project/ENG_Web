import {React} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
function Header() {

      let navigate = useNavigate();
      /*** styled-components를 이용한 헤더스타일 ***/

      let Header = styled.div`
        background : #FAFAFA;
        width: 100%;
        height: 11vh;
        display: flex;
        justify-content: space-between;
        `

      let Logo = styled.h1`
        color: black;
        font-size: 40px;
        background-color:#FAFAFA;
        margin: 5vh 0 0 17vw;
        cursor: pointer;
        `

      let UserBox = styled.div`
        background-color: #FAFAFA;
        display: flex;
        height: 50px;
        margin: 6vh 17vw 0 0 ;
      `

      let Button = styled.button`
        color: black;
        font-size: 20px;
        background-color: #FAFAFA;
        border-style: none;
        font-weight: 500;
      `

      let Hr = styled.hr`
        margin: 0;
        padding: 0;
      `
  const  user = localStorage.getItem('managerName');
    
  return(
    <>
    <Header>
      <Logo  onClick={()=> { navigate('/main')}}>!ENG?</Logo>
      <UserBox>
        <Button onClick={()=> navigate('/mypage')}><FaUser  size="25" color='grey'/> {user}</Button>
        {/****클릭시 비밀번호 재설정 페이지로 이동 ****/}   
        <Button onClick={()=> {localStorage.clear(); navigate('/')}} >로그아웃</Button>    
        {/****로그아웃하면 localStorage에 저장된 모든 정보 삭제 ****/}   
      </UserBox>
      
    </Header>  
    <Hr></Hr>
    </>

  );
}

export default Header;