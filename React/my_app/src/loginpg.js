import { useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Weltext } from "./log2";

import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";

function Log(props){

    // let [getEmail,setEmail] = useState("")
    // let [getPassword,setPassword] = useState("")            ...instead of using this

    let [loginData,setLoginData] = useState({
        name : "divya",
        email : "div@gmail.com",
        password : 123456
    })

    const navigate = useNavigate();

   
    
    const Logincheck = () => {
        // alert(1)
        if(loginData.email == "div@gmail.com" && loginData.password == 123456){
            // alert("success")
            props.setIsLogged({
                loggin : true,
                email : loginData.email
            })
            navigate('/todo')                                   
        }
        else{
            // alert("failed")
            props.setIsLogged({
                loggin : false,
                email : loginData.email
            })
        }
    }

    // const Logincheck = ()=> {
    //     axios({
    //         method : 'post',
    //         url : 'http://agaram.academy/api/action.php',
    //         data : {
    //             request : 'candidate_login',
    //             email : loginData.email,
    //             password : loginData.password
    //         }
    //     }).then(function(success){
    //         console.log("success :",success)
    //         props.setIsLogged({
    //                         loggin : false,
    //                         email : loginData.email
    //                     })
    //                     navigate('/user') 
    //     })
        
    // } .............

    // const Checkflask = () => {
    //     axios.get("http://127.0.0.1:5000/home").then(function(success){
    //         console.log(success)
    //     })
    // }

    return(
     
        <>
        <b> 
         {JSON.stringify(loginData)} 
        </b>
        
            <h2>Login here!</h2>
            <label>NAME :</label>
            <input type = "text" className="mb-3" placeholder="Enter name" defaultValue= {loginData.name} onKeyUp={(e)=>setLoginData({...loginData,name: e.target.value})}></input>
            <label>EMAIL :</label>
            <input type="text" className="mb-3" placeholder="Enter email" defaultValue= {loginData.email} onKeyUp={(e)=>setLoginData({...loginData,email: e.target.value})}></input>
            <label>PASSWORD :</label>
            <input type="password" className="mb-3" placeholder="Enter password" defaultValue= {loginData.password} onKeyUp={(e)=> setLoginData({...loginData,password : e.target.value})}></input> 

            <Button type="button" onClick={() => Logincheck()}>Login</Button> 
            {/* <Button type="button" onClick={() => Checkflask()}>Flask check</Button> */}
            
        </>
      
    )
    
}

export default Log;