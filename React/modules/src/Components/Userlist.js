
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import { SaveID, Showallusers } from "../slice/userSlice"
import { useDispatch, useSelector } from "react-redux"



function Userlist(props){

const {getID}=useSelector((state)=>state.user)

// const id = useSelector((state) => state.user.getID)

    const Logout = ()=>{
        dispatch(SaveID(0))
        localStorage.removeItem("login")
        navigate('/login')
    }

    const dele = (id) => {
        axios.get(`http://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(function(success){
            console.log(success)
            GetAll()
        })
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=>{
        GetAll()
    },[])   

    const GetAll = () => {
    //    if(localStorage.getItem("login")=="true"){
        axios.get(" http://agaram.academy/api/action.php?request=getAllMembers").then(function(success){
            console.log(success.data.data)
            console.log(dispatch(Showallusers(success.data.data)))
            // navigate("/users")
       })
    //    }
    //    else{
    //     navigate('/login')
    //    }       
}
    const Check = (id) =>{
        if(localStorage.getItem("login")){
            if(id!=0){
                navigate(`/users/${id}`)
            } 
        }
        else{
            dispatch(SaveID(id))
            console.log(getID)
            navigate('/login')
        }

    }


    const disusers = useSelector((state) => state.user.allUsers)
    const userID = useSelector((state)=> state.user.getID)

    return(
        <>
        <h2>Registered user details : </h2>

       { props.isDeletevisible ? <button type="button" onClick={()=>Logout()}>SIGN OUT</button> : null}
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>View</th>
                        {props.isDeletevisible ? <th>Delete</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {disusers.map((d)=>{
                        return <tr>
                            <td> {d.id} </td>
                            <td> {d.name} </td>
                            <td> {d.email} </td>
                            <td>  <Link onClick={()=>Check(d.id)}> view </Link>  </td> 
                           { props.isDeletevisible ? <td> <button type="button" onClick={()=>dele(d.id)}>Delete</button> </td> : null }
                        </tr>
                    })}
                </tbody>
            </table>
            
        </>
    )
}

export default Userlist