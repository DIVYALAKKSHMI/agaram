import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Sub from './subheader'
import Header from './comp';

import { useState,useEffect } from 'react';

import State from './Prop2';

import Todo from './Todo';

import User from './user/user'

import Log from './loginpg';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() { 

  let [isLogged,setIsLogged] = useState({
    loggin : false,
    email : ""
  })

  
  const router = createBrowserRouter([
    {
      path : '/',
      element : <h2>welcome to Agaram</h2>
    },
    {
      path : '/login',
      element : <Log isLogged={isLogged} setIsLogged={setIsLogged}/>
    },
    {
      path : '/todo',
      element : <Todo isLogged={isLogged} setIsLogged={setIsLogged}/>
    },
    {
      path : '/user',
      element : <User isLogged={isLogged} setIsLogged={setIsLogged}/>
    }
  ])

  

  // let [name,change]=useState("Javascript")
  
  // let [num,changenum] = useState(0)

  // let num =0;
  // function changenum(){
  //   num = num+1                                  ...behind useState
  // }
  // changenum()


   return (
    <div className="App">

      <header className="App-header">
        {/* <Sub name = "Divya" place ="ngl" message ="can i help you?"/>
        <Header />

        <h1>{name}</h1>
        <Button variant = "primary" onClick={()=>change("React")} >change</Button> */}
        {/* <Button variant = "primary" onClick={()=>change("Python")} >change</Button> */}

        
        {/* {num}
        <Button variant = "primary" onClick={()=>changenum(num+1)} >change number</Button>

        <State />
         */}

        {/* <Todo />   ...todolist table
        
        <User />   ...namelist table */}

        <RouterProvider router={router}></RouterProvider>
    
        {/* <Log /> */}
      </header>

    </div>
  );
}

export default App;

