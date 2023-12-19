
import axios from "axios";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { UpdateRegdata } from "../slice/userSlice";

function Register(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const reg = useSelector((state)=> state.user.regData)

    

    const PostDetails = () => {
        // alert(1)
        axios({
            method : "POST",
            url : "http://agaram.academy/api/action.php",
            Data : {
                "request" : "create_candidate",
                "email" : reg.email,
                "password" : reg.password,
            }
        }).then(function(success){
            console.log(success)
            // console.log(dispatch(Regdata(RegDetails)))
            
            navigate('/login')
        })
        
    }

    return(
        <>
            <h2>Register here!</h2>
            {/* <label>name : </label>
            <input type="text" defaultValue={RegDetails.name} onKeyUp={(e)=>SetRegDetails({...RegDetails,name : e.target.value})}></input> */}
            <label>Email : </label>
            <input type="text" defaultValue={reg.email} onKeyUp={(e)=>dispatch(UpdateRegdata({...reg,email : e.target.value}))}></input>
            <label>Password : </label>
            <input type="password" defaultValue={reg.password} onKeyUp={(e)=>dispatch(UpdateRegdata({...reg,password : e.target.value}))}></input>
            {/* <label>Aadhar : </label>
            <input type="text" onKeyUp={(e)=>SetRegDetails({...RegDetails,aadhar : e.target.value})}></input>
            <label>Address : </label>
            <textarea onKeyUp={(e)=>SetRegDetails({...RegDetails,address : e.target.value})}></textarea>
            <label>Phone : </label>
            <input type="text" onKeyUp={(e)=>SetRegDetails({...RegDetails,phone : e.target.value})}></input>
            <label>City : </label>
            <input type="text" onKeyUp={(e)=>SetRegDetails({...RegDetails,city : e.target.value})}></input>
            <label>Area : </label>
            <input type="text" onKeyUp={(e)=>SetRegDetails({...RegDetails,area : e.target.value})}></input>
            <label>Pin : </label>
            <input type="text" onKeyUp={(e)=>SetRegDetails({...RegDetails,pin : e.target.value})}></input> */}
            <button type="button" onClick={()=> PostDetails()}>REGISTER</button>
        </>
    )
}
export default Register