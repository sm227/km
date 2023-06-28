import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import "./Admin"

export default function Home() {
  const movePage = useNavigate();

  function kmPortal() {
    window.open("https://portal.kyungmin.ac.kr/portal/index.do");
  }

  function goMenu() {
    movePage("./Menu");
  }

  function goTaxi() {
    movePage("./Taxi");
  }

  function goAdmin() {
    movePage("./Admin")
  }

  return (
    <div className="body">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/37d74127d03/uijeongbu-si/"
        data-label_1="UIJEONGBU-SI"
        data-label_2="WEATHER"
        data-icons="Climacons"
        data-textcolor="#ffffff"
      >
        UIJEONGBU-SI WEATHER
      </a>
      <div className="live">
        <p>도봉산역 : 🟢</p>
        <p>화정역 : {First}</p>
        <p>구리역 : ❌</p>
      </div>
      <h1 className="title">오뱃뭐?</h1>
      <h3 className="subTitle">환영합니다.</h3>
      <div className="button">
        <p>
          <button className="glow-on-hover" type="button" onClick={goMenu}>
            🍚 오늘의 메뉴 확인하기
          </button>
        </p>
        <p>
          <button className="glow-on-hover" type="button" onClick={goTaxi}>
            🚕 택시 이용하기
          </button>
        </p>
        <p>
          <button className="glow-on-hover" type="button" onClick={kmPortal}>
            🏫 경민대학교 포털
          </button>
        </p>
      </div>
      <br></br>
      <h3 className="ver">Ver 2.0 Beta</h3>
      <button className="admin" onClick={goAdmin}>관리자 로그인</button>
    </div>
  );
}
