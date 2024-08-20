import logo from './logo.svg';
import './App.css';

import { useState,useEffect } from 'react';
import Car from './Hooks';


function App() {

  let [Num,SetNum] = useState(0)

  // useEffect(() => {
  //   getInput()
  // },[])

  const getInput = () => {
    // let Inputnum = prompt("Enter num : ")
    let Inputnum = document.getElementById("input").value
    SetNum(Inputnum)
  }

  let result_array = []

  for(var i = 1; i <= Num; i++){
    if(i % 3 == 0 && i % 5 == 0){
      result_array.push("FizzBuzz")
    } else if (i % 3 == 0){
      result_array.push("Fizz")
    } else if (i% 5 == 0){
      result_array.push("Buzz")
    } else {
      result_array.push(i)
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">


    {/* <h2>WELCOME</h2>
    <h4>Enter Input Value : </h4> 
    <input id='input'></input> 
    <br />
    <button onClick={() => getInput()}>SUBMIT</button>
    {JSON.stringify(result_array)} */}


      <Car />

      </header>
    </div>
  );
}

export default App;
