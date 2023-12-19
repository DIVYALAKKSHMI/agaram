import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { UpdateLogindata, UpdateStatus } from "../slice/userSlice"


function Login(){

    useEffect(()=>{ 
        if(localStorage.getItem("login") == "true"){
            navigate('/users')
        }
    },[])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Regdata = useSelector((state) => state.user.regData)
    const Logdata = useSelector((state) => state.user.loginData)
    const id = useSelector((state) => state.user.getID)
    const statusof = useSelector((state) => state.user.status)

    const LoginCheck = () => {
        
            axios({
                method : "POST",
                url : `http://agaram.academy/api/action.php?request=candidate_login&email=${Logdata.email}&password=${Logdata.password}`,
            }).then(function(success){
                console.log(success)

                dispatch(UpdateStatus(success.data))

                if(statusof.status=="success"){
                    localStorage.setItem("login","true")

                    if(id == 0){
                        // alert(1)
                        navigate('/users')
                    }
                    else{
                        // alert(2)
                        navigate(`/users/${id}`)
                    }  
                }   
                else{
                    navigate('/login')
                } 
            })
        }
        
        

    return(
        <>
            {/* {JSON.stringify(Regdata)} */}
            {/* {JSON.stringify(Logdata)} */}
            <h2>Login</h2>
            <label>Email : </label>
            <input type="text" defaultValue={Logdata.email} onKeyUp={(e)=>dispatch(UpdateLogindata({...Logdata,email : e.target.value}))}></input>
            <label>Password : </label>
            <input type="password" defaultValue={Logdata.password} onKeyUp={(e)=>dispatch(UpdateLogindata({...Logdata,password : e.target.value}))}></input>
            <button type="button" onClick={()=>LoginCheck()}>LOGIN</button>
        </>
    )
}
export default Login