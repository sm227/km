import React , {useState} from "react";
import "./Admin.css";


function Admin() {
    const  [One,setOne] = useState('')
    
  return (
    <div>
      <header>
        <h1>관리자 Dashboard</h1>
      </header>
      <main>
        <button>매우혼잡</button>
        <button>혼잡</button>
        <button>원활</button>
      </main>
    </div>
  );
}

export default Admin;
