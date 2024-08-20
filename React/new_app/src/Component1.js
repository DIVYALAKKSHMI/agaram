import { createContext, useState } from "react"
import Component2 from "./Component2"

export const myContext = createContext()

export default function Component1(){

    const [Name,Setname] = useState("Divya")

    return(
        <myContext.Provider value ={Name}>
            {/* <h2> {`The name is ${Name}`} </h2> */}
            <Component2 />
        </myContext.Provider>
    );

}