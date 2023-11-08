import { useState } from "react";
import { Button } from "react-bootstrap";

export function Getuser(props){

    let [inputvalue,setvalue] = useState("")

    return(
        <form>
            <input type="text" placeholder="type here..." onKeyUp={(e)=> setvalue(e.target.value)}/>
            <Button type="button" onClick={()=>props.function([...props.values,inputvalue])} className="m-2 ">Add</Button>
        </form>
    )
}