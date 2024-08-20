import React,{ useContext } from "react"
import { myContext } from "./Component1"

export default function Component4(){

    const data = useContext(myContext)

    return(
        <>
            <h2>Component 4</h2>
            {/* <p>The name is {data}</p> */}
            <h2>{`The name is ${data}`}</h2>
        </>
    );
} 