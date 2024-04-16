
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App=() =>{
  const [counter,setState]=useState(0);

  const handleClick= ()=>{
    setState(counter + 1);
  }
  
    return (<>  <p>Button clicked {counter} times</p>
    <button onClick={handleClick}>Click</button></>
)
}

export default App