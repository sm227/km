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

    function goTaxi() {
      movePage('./Taxi');
    }

    return (




      
      
      <div className='body'>
      <div id="ww_c13bb1c0fcd69" v='1.3' loc='id' a='{"t":"horizontal","lang":"ko","sl_lpl":1,"ids":["wl7411"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>Weather for the Following Location: <a href="https://2ua.org/de/kor/uijeongbu/karte/" id="ww_c13bb1c0fcd69_u" target="_blank">karte von Uijeongbu</a></div>
       <h1 className="title">오뱃뭐?</h1>
       <h3 className= "subTitle">환영합니다.</h3>
       <div className='button'>
       <p><button className="glow-on-hover" type="button" onClick={goMenu}>🍚 오늘의 메뉴 확인하기</button></p>
       <p><button className="glow-on-hover" type="button" onClick={goTaxi}>🚕 택시 이용하기</button></p>
       <p><button className="glow-on-hover" type="button" onClick = {kmPortal}>🏫 경민대학교 포털</button></p>
       </div>
       <br></br>
       <h3 className = "ver">Ver 2.0 Beta</h3>
      </div>
        
  
  
    )
}