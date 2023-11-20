import { useState } from "react";
import { Button } from "react-bootstrap"
import { Getuser } from "./user2";

import { Navbar } from "../headnav";

import { useEffect } from "react";

import axios from "axios";

function User(){

    // let [list,setitem] = useState(["divya","abisha","shali"])

    // const dele = (v)=>{
    //     alert(v)
    //     let val = list.filter((l)=> v!=l)     
    //     setitem(val)
    // }

    // const toGetData = ()=> {
    //     axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
            
    //       }).then(function (response){
    //         console.log("response",response.data)
    //       });
    // }

    // useEffect(()=>{
    //     // alert(1)
    //     // toGetData()
    //     console.log(list)
    // },[list])

    let [timer,setTimer] = useState(0)
    let [timerStart,isTimerStart] = useState(true)

    useEffect(()=>{
        if(timerStart){
            setTimer(timer+1)
        }
    },[timer,timerStart])

    return(
        <div>
            {/* <Navbar />
            <br></br>

            <h2>USER LIST</h2>
            <br></br>

            <table className="table table-bordered">
                <tr>
                    <th>Order</th>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {                                                        ...user list
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
            <Button type="button" onClick={()=>toGetData()}>Get data</Button> */}


            <p>TIMER</p>
            <b style={{fontSize:'26px'}}>{timer}</b>  
            <br></br>
        
            <br></br>
            <Button 
            variant="primary" onClick={()=>isTimerStart(!timerStart)}>
            {timerStart?'Stop' : 'Start'}
            </Button>  { `  `}

            <Button variant="primary" onClick={async ()=> { await isTimerStart(false) ; setTimer(0)}}>Reset</Button>

        </div>
    )
}

export default User;

// "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"