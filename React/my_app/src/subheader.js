import { Button } from "react-bootstrap";

function Sub(props){
    return(
        <div>
        <p>Welcome ,{props.name}</p>
        <b>{props.message}</b>
        </div>
    )
}

export default Sub;

