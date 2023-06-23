import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Menu from './Menu';


function App() {
  const movePage = useNavigate()

  function kmPortal() {
      window.open('https://portal.kyungmin.ac.kr/portal/index.do')
  }

  function goMenu() {
    movePage('./Menu');
  }
  return (
    
    <div>

        <BrowserRouter>
          <Routes>
              <Route path={"./Menu"} element={<Menu/>}></Route>
              
          </Routes>
          </BrowserRouter>

     <h1 className="title">오뱃뭐?</h1>
     <h4 className= "subTitle">환영합니다.</h4>
     <p><button className="glow-on-hover" type="button" onClick={goMenu}>🍚 오늘의 메뉴 확인하러 가기</button></p>
     <p><button className="glow-on-hover" type="button">🚕 택시 이용하기</button></p>
     <p><button className="glow-on-hover" type="button" onClick = {kmPortal}>🏫 경민대학교 포털</button></p>
     <br></br>
     <h3 className = "ver">Ver 2.0 Beta</h3>
    </div>


  )
}

export default App;
