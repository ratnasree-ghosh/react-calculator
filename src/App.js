import React, {useState} from "react";
import './App.css';


function App() {

    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");
    let [res, setRes] = useState("");
    
    let [suc, setSuc] = useState("");

    function isValid(n1,n2){
      if(n1 && n2 !== ""){
        console.log("Numners are Valid!");
        
        return true;
        
      } else{
        return false;
      }
    }

    function addition(){
      if(isValid(num1,num2)){
        let ans = Number(num1) + Number(num2);
        setRes(ans);
        setSuc("Success : Your result is shown above!");
      }else{
        setSuc("Error :  Number cannot be empty");
        setRes("");
      }
    }

    function substaction(){
      if(isValid(num1,num2)){
        let ans = Number(num1) - Number(num2);
        setRes(ans);
        setSuc("Success : Your result is shown above!");
      }else{
        setSuc("Error :  Number cannot be empty");
        setRes("");
      }
    }

    function multiply(){
      if(isValid(num1,num2)){
        let ans = Number(num1) * Number(num2);
        setRes(ans);
        setSuc("Success : Your result is shown above!");
      }else{
        setSuc("Error :  Number cannot be empty")
        setRes("");
      }
    }

    function division(){
      if(isValid(num1,num2)){
        let ans = Number(num1) / Number(num2);
        setRes(ans);
        setSuc("Success : Your result is shown above!");
      }else{
        
          setSuc("Error :  Num1 cannot be empty");
        
        
        setRes("");
      }
    }

    return (
      <div className="App">
        <h1>React Calculator</h1>

       <input placeholder="Num1" onChange={(e)=>setNum1(e.target.value)}/>
       <div>
       <input placeholder="Num2" onChange={(e)=>setNum2(e.target.value)}/>
      </div>

      <div className="btn">
       <button onClick={addition}>+</button>
       <button onClick={substaction}>-</button>
       <button onClick={multiply}>*</button>
       <button onClick={division}>/</button>

       </div>

        <h3>{res!==""?`Result = ${res}`:""}</h3>

       <p style={suc==="Error :  Number cannot be empty"? {color: "red"}: {color: "rgb(157, 231, 45)"}}>{suc}</p> 
        
  
      </div>
    );
  }
  
  export default App;