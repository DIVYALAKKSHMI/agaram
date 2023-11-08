import { Button } from "react-bootstrap";


import { useState } from "react";

import User from "./user/user";
import { Getuser } from "./user/user2";
import { Navbar } from "./headnav";



function Todo(props){

    let [inputvalue,setinputvalue] = useState("")
    
    let [todos,setarrayvalue] = useState(["medicine","charger","powerbank","bedseet"])

    const del = (v) => {
        alert(v)
       let updatedtodo = todos.filter((t)=>t!=v)
        setarrayvalue(updatedtodo)
    }

    

    return(
        <div>
        <Navbar />
        <br></br>
        
        {props.isLogged? <h2>Welcome,{props.isLogged.email}</h2> : <h2>Guest user</h2>}
        <br></br>

        <h2>TODO LIST</h2>
        <table border={1} className="table table-bordered">
            <tr>
                <th>Order</th>
                <th>Action</th>
                <th>Delete</th>
            </tr>
            {
                todos.map((t,i) => (
                    <tr>
                        <td>{i+1}</td>
                        <td>{t}</td>
                        <td> <Button variant="warning" type="button" onClick={()=>del(t)} className="m-2">Delete</Button> </td>
                    </tr>
                ))
            }
        </table>
        
        
        
        {/* <form>
       {inputvalue}
       <input type="text" placeholder="type here..." id="text" onKeyUp={(e)=>setinputvalue(e.target.value)}></input>
       <Button onClick={()=> setarrayvalue(
           [...todos,inputvalue]
       )}>ADD</Button>
        </form> */}
        <Getuser values = {todos} function = {setarrayvalue}/>
        {/* <User /> */}

        </div> 
    )
    
}



export default Todo;