import { Link } from "react-router-dom";
import Todo from "./Todo";
import User from "./user/user";
import { Nav } from "react-bootstrap";


export function Navbar(){
    return(
        <nav className="flex"> 
            <ul>
                <li>
                <Link to={`/`}> Home </Link>
                </li>
                <li>
                <Link to={`/todo`}> Todo list </Link>
                </li>
                <li>
                <Link to={`/user`}> User list </Link>
                </li>
            </ul>  
        </nav>
    )
}