import { Button } from "react-bootstrap";


function Changeprop(prop){
    return(
    <div>
    <h1>{prop.name}</h1>
    <Button variant="success" onClick={prop.words}>check it out</Button>
    </div>
    )
} 

export default Changeprop; 