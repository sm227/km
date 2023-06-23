import React from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const movePage = useNavigate()

    function kmPortal() {
        window.open('https://portal.kyungmin.ac.kr/portal/index.do');
    }
  
    function goMenu() {
      movePage('./Menu');
    }

    return (
      
      <div className='body'>
       <h1 className="title">오뱃뭐?</h1>
       <h3 className= "subTitle">환영합니다.</h3>
       <p><button className="glow-on-hover" type="button" onClick={goMenu}>🍚 오늘의 메뉴 확인하기</button></p>
       <p><button className="glow-on-hover" type="button">🚕 택시 이용하기</button></p>
       <p><button className="glow-on-hover" type="button" onClick = {kmPortal}>🏫 경민대학교 포털</button></p>
       <br></br>
       <h3 className = "ver">Ver 2.0 Beta</h3>
      </div>
  
  
    )
}