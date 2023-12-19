import { useEffect } from "react"
import { useSelector } from "react-redux"
// import Header from "./Header"
import { useDispatch } from "react-redux"
import { Logout, updateLoginSuccess } from "./Slice/userSlice"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"


function Homepg(){

    const loginDetail = useSelector((state)=> state.user.loginSuccessData)
    const navigate = useNavigate()
    const dispatch = useDispatch()

  
    const signingOut = () => {
        dispatch(Logout({}))
        localStorage.removeItem("token")
        navigate("/login")
        // console.log(Logout())
        
    }

    useEffect(()=> {
        if(!loginDetail?.status){

            if(localStorage.getItem("token")){
                 axios.get('https://42b523e1-172c-4bcf-8cc3-7563b6b2f667.mock.pstmn.io/gettoken',{token:localStorage.getItem("token")}).then(function(res){
                    console.log(res)
                    // alert(JSON.stringify(res))
                    // dispatch(updateLoginSuccess(res))
                    

                    if(res.status == 201){
                        dispatch(updateLoginSuccess(res))
                        // console.log("success")
                    }

                    else{
                        navigate('/login')
                        
                        // console.log(3)
                    }
                })
            }

            else{
                navigate('/login')
            }
        }
    },[])


    return(
        <>
            <button type="button" onClick={()=>signingOut()}>SIGN OUT</button>  
            <h2>Welcome to homepage ,{loginDetail.status == 201 ? loginDetail.data.name : "guest user"}</h2>
            {JSON.stringify(loginDetail.data)}
        </>
    )
}

export default Homepg