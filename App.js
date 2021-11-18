import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue,setInputValue] =useState('');
  const [value2,setValue2] =useState('');
  const [width,setWidth] =useState(window.innerWidth);
  useEffect(()=>{
    document.title=inputValue

  },[inputValue])
  //const someState= state[0]
  //const stateUpdater = state[1]
   const onWindowResize = () => {
    setWidth(window.innerWidth
    )}
  useEffect(()=>{
    window.addEventListener ('resize',onWindowResize);
    return()=>{
      window.addEventListener ('resize',onWindowResize);
    };
  },
  []);

  const onInputValueChange=(e)=>{
    setInputValue(e.target.value);
  }
  const onValue2Change=(e)=>{
    setValue2(e.target.value);
  };
  return (
    <div style={{flex:1}}>App Component
    <div>
          <input value={inputValue} onChange={onInputValueChange}/>
          <br/>
          <br/>
          <input value={value2} onChange={onValue2Change}/>
          <br/>
            <br/>
            <div>{width}</div>
        </div>
    </div>
  );
}

export default App;
