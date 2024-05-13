//App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./ClassCom";
import FuncCom from "./FuncCom";
import TodoList from "./todolist";
import MapTest from "./MapTest";
import Timer from "./Timer";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  let name : string  = "토끼";


  return (
      <div className="container">
        {/* 주석문을 작성합니다 */}
        <TodoList/>
        {/* <Clock/> */}
        <MyWeather weather="맑음" test="string"> 일기예보</MyWeather>
      </div>
  );

}


export default App;
