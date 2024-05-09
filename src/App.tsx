//App.tsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name : string  = "토끼";
  
  // return (
  //     <div className="container">
  //       <h1 className = "test">Hello, {true ? null : name}!!</h1>
  //       <p>반갑습니다</p>
  //     </div>
  // );

  const port = undefined;

  return (<>
  {port || '포트를 설정하지 않았습니다'}
  </>);
}


// function App() {
//   return React.createElement("div", null, "Hello, React!!", React.createElement("p", null, "반갑습니다."));
// }

export default App;
