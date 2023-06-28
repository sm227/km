import React , {useState} from "react";
import "./Admin.css";


function Admin() {
    const  [One,setOne] = useState('')
    function First(props) {
        setOne["🟡"]
        return <One></One>
    }
  return (
    <div>
      <header>
        <h1>관리자 Dashboard</h1>
      </header>
      <main>
        <button onClick={First}>매우혼잡</button>
        <button>혼잡</button>
        <button>원활</button>
      </main>
    </div>
  );
}

export default Admin;
