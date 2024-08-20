import { useState } from "react";
import Changeprop from "./Propchange";



function State(){
    let [nme,word] = useState(0) 
    return(
    
    <Changeprop name={nme} words={()=>word(nme+1)}/>
    
    )
} 

export default State;