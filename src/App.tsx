//App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";

function App() {
  let name : string  = "토끼";


  return (
      <div className="container">
        <h1 className = "test">Hello, {true ? null : name}!!</h1>
        <p>반갑습니다</p>
        {/* 주석문을 작성합니다 */}
        <ClassCom/>
        <FuncCom/>
      </div>
  );

}


export default App;
