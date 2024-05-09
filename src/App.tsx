//App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name : string  = "토끼";

  const style = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : '20px'
  }
  
  return (
      <div style = {{
        backgroundColor : 'blue',
        color : 'white',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : '20px'
      }
      }>
        <h1 style = {style}>Hello, {true ? null : name}!!</h1>
        <p>반갑습니다</p>
      </div>
  );

}


export default App;
