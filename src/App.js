import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import Taxi from './Taxi';


function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/Menu"} element={<Menu />}></Route>
              <Route path={"/Taxi"} element={<Taxi />}></Route>
              
          </Routes>
          </BrowserRouter>
  )
}

export default App;
