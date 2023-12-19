import { useState } from "react";
import axios from "axios"

import { useDispatch, useSelector } from "react-redux";

import { updateLoginSuccess } from "./Slice/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Loginput(){

    const navigate = useNavigate()

    let [loginDta,setLoginDta] = useState({
        name : "divya",
        email : "div@gmail.com",
        password : 1234,
        token : "esdtfghjuy"
    })

    const SuccessData = useSelector((state)=>state.user.loginSuccessData)

    const dispatch = useDispatch();

    const checkLogin = async() => {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts',loginDta)
        
        dispatch(updateLoginSuccess(response))
        localStorage.setItem("token",response.data.token)
        console.log(response.data)
        // console.log(response.status)
        console.log(response)
        navigate('/homepage')
    }

    return(
        <>  
            -{JSON.stringify(SuccessData.data)}
            <label>Name : </label>
            <input type="text" defaultValue={loginDta.name} onKeyUp={(e)=>setLoginDta({...loginDta,name : e.target.value})}></input>
            <label>Email : </label>
            <input type="text" defaultValue={loginDta.email} onKeyUp={(e)=>setLoginDta({...loginDta,email : e.target.value})}></input>
            <label>Password : </label>
            <input type="password" defaultValue={loginDta.password} onKeyUp={(e)=>setLoginDta({...loginDta,password : e.target.value})}></input>
            <button type="button" onClick={()=>checkLogin()}>LOG IN</button>
        </>
    )
}

export default Loginput;

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);