//App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import TodoList from "./todolist";
import MapTest from "./MapTest";

function App() {
  let name : string  = "토끼";


  return (
      <div className="container">
        {/* 주석문을 작성합니다 */}
        <TodoList/>
        <MapTest/>
      </div>
  );

}


export default App;
