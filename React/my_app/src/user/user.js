import { useState } from "react";
import { Button } from "react-bootstrap"
import { Getuser } from "./user2";

import { Navbar } from "../headnav";


import axios from "axios";

function User(){

    let [list,setitem] = useState(["divya","abisha","shali"])

    const dele = (v)=>{
        alert(v)
        let val = list.filter((l)=> v!=l)
        setitem(val)// function del(dos){
            //     let values = dos
            //     console.log(values)
            //     // for(var i=0;i<values.length;i++){
                
            //     // }
            // }
            
            // export default del;
    }

    const toGetData = ()=> {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            
          }).then(function (response){
            console.log("response",response.data)
          });
    }

    return(
        <div>
            <Navbar />
            <br></br>

            <h2>USER LIST</h2>
            <br></br>

            <table className="table table-bordered">
                <tr>
                    <th>Order</th>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {
                    list.map((t,i) => (
                        <tr>
                            <td>{i+1}</td>
                            <td>{t}</td>
                            <td> <Button type="button" onClick={()=> dele(t)} className="m-2">Delete</Button> </td>
                        </tr>
                    ))
                }
            </table>
            <Getuser values={list} function={setitem} />
            <br></br>
            <Button type="button" onClick={()=>toGetData()}>Get data</Button>
        </div>
    )
}

export default User;

// "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"