import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { DisplaysingleUser, SaveID, UpdateloadActivestatus } from "../slice/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Userlist from "../Components/Userlist"

function UserDetail(){

    const {userid} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const userDetail = useSelector((state) => state.user.singleUser)
    const activestatus =  useSelector((state)=> state.user.IsloadActive)

    useEffect(()=>{
        GetDetail()
    },[userid])

    const GetDetail = () => {
        dispatch(UpdateloadActivestatus(true))
        axios.get(`http://agaram.academy/api/action.php?request=getMemberDetail&id=${userid}`).then(function(success){
            
            console.log(success.data.data)
            dispatch(DisplaysingleUser(success.data.data))
            dispatch(UpdateloadActivestatus(false))

            // SetUserData(success.data.data)
        })
    }

    return(
        <>
            <h2>Details of userID : </h2> 
            
            {/* <h2>Welcome , {userDetail.name} </h2> */}

            {userid}
            {/* <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Aadhar</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Area</th>
                        <th>Pin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userDetail.id}</td>
                        <td>{userDetail.name}</td>
                        <td>{userDetail.email}</td>
                        <td>{userDetail.aadhar}</td>
                        <td>{userDetail.address}</td>
                        <td>{userDetail.phone}</td>
                        <td>{userDetail.city}</td>
                        <td>{userDetail.area}</td>
                        <td>{userDetail.pin}</td>
                    </tr>
                </tbody>
            </table> */}

            {activestatus == true ? <img src="https://i.pinimg.com/originals/49/c4/75/49c47592c39596189d33ffca3544313d.gif" height={200}></img> : <p>Welcome, 
            <br></br> Name : {userDetail.name} 
            <br></br> Email : {userDetail.email} 
            <br></br> Aadhar : {userDetail.aadhar} 
            <br></br> Address : {userDetail.address} 
            <br></br> Phone : {userDetail.phone} 
            <br></br> City : {userDetail.city}  
            <br></br> Area : {userDetail.area}
            <br></br> Pin : {userDetail.pin}
            </p>  }

            {/* <span>ID : {userDetail.id} </span>
            <span> Name : {userDetail.name} </span>
            <span>Email : {userDetail.email} </span>
            <span>Aadhar : {userDetail.aadhar} </span>
            <span>Address : {userDetail.address} </span>
            <span>Phone : {userDetail.phone} </span>
            <span>City : {userDetail.city} </span>
            <span>Area : {userDetail.area} </span>
            <span>Pin : {userDetail.pin} </span> */}
        
            <Userlist isDeletevisible={true}/>
            
        </>
    )
}

export default UserDetail