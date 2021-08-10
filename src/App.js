import React, { useState} from 'react';
import './App.css';


const App = ()=> {
  const [result, setResult] = useState("");
  const [res, setRes] = useState("calc-screen");
  const [calscreen,setCalscreen] = useState("calc-app1");
  const [key,setKey] = useState("keypad1");
  const [inputar,setInputar] = useState("w1");
  const [btn,setBtn] = useState("button");
  const[oper,setOper] = useState("btn1");
  const [zero,setZero] = useState("zeros1");
  const [answer,setAnswer] = useState("");
  const [ansscreen,setAnsscreen] = useState("calc-screen3");
  
  function handleclick(e) {
      setResult(result.concat(e.target.name));
      
    if(result.length>=8){
      setRes("calc-screen1")
    }
    if(result.length>=12){
      setRes("calc-screen2")
    }
  }
  function backspace() {
    setResult(result.slice(0, result.length - 1))
    if(result.length>=12){
      setRes("calc-screen2")
    }
    if(result.length>=8 && result.length<12){
      setRes("calc-screen1")
    }
    if(result.length<8){
      setRes("calc-screen")
    }
    setAnswer(answer.slice(0, answer.length - 1))
  }
  function clear() {
    setResult("")
    setAnswer("")
    setRes("calc-screen")
  }
  function calculate() {
    try {
     
      setResult("");
       // eslint-disable-next-line
      setAnswer(eval(result).toString());
      
    }
    catch (error) {
      setResult("error");
      setAnswer("");
    }
  }
  function darkmode(){
    var e = document.getElementById("checked").checked
    if(e){
      setCalscreen("calc-app")
      setInputar("w")
      setKey("keypad")
      setBtn("button1")
      setOper("btn2")
      setZero("zeros")
      setAnsscreen("calc-screen4")
      document.getElementById("mode").innerHTML="Dark mode";
    }else{
      setCalscreen("calc-app1")
      setInputar("w1")
      setKey("keypad1")
      setBtn("button")
      setOper("btn1")
      setZero("zeros1")
      setAnsscreen("calc-screen3")
      document.getElementById("mode").innerHTML="Light mode";
    }
  }

  return (
    <div>
      
      <h1>SIMPLE CALCULATOR</h1>
    <div className={calscreen}>
      <form className="input">
        <input type="text" id={inputar} className={res} disabled value={result}  />
        <input type="text" className={ansscreen} disabled value={answer}  />
      </form>
      <div className={key}>
        <button className={zero}  onClick={clear}>AC</button>
        <button className={zero} onClick={backspace}>C</button>
        <button className={oper} name="%" onClick={handleclick}>%</button>
        <button className={oper}  name="/" onClick={handleclick}>/</button>

        <button className={btn} name="7" onClick={handleclick}>7</button>
        <button className={btn} name="8" onClick={handleclick}>8</button>
        <button className={btn} name="9" onClick={handleclick}>9</button>
        <button className={oper}  name="*" onClick={handleclick}>*</button>

        <button className={btn} name="4" onClick={handleclick}>4</button>
        <button className={btn} name="5" onClick={handleclick}>5</button>
        <button className={btn} name="6" onClick={handleclick}>6</button>
        <button className={oper}  name="+" onClick={handleclick}>+</button>

        <button className={btn} name="1" onClick={handleclick}>1</button>
        <button className={btn} name="2" onClick={handleclick}>2</button>
        <button className={btn} name="3" onClick={handleclick}>3</button>
        <button className={oper}  name="-" onClick={handleclick}>-</button>

        <button className={zero} name="00" onClick={handleclick}>00</button>
        <button className={btn} name="0" onClick={handleclick}>0</button>
        <button className={zero}  name="." onClick={handleclick}>.</button>
        <button className="equal"   onClick={calculate}>=</button>
      </div>
    </div>
    <div className="mg">
      <p id = "mode" >Light mode</p>
       <label className="switch">
      <input type="checkbox" id="checked" onClick={darkmode} ></input>
      <span className="slider"></span>
      </label>
      
      </div>
  </div>
  );
}
export default App;