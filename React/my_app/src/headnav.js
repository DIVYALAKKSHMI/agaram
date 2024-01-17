import { Link } from "react-router-dom";
import Todo from "./Todo";
import User from "./user/user";
import { Nav } from "react-bootstrap";

import moment from "moment";

import { useEffect, useState } from "react";

export function Navbar(){

    
    const formatteddate = moment().format("MMMM Do YYYY,LTS")
    console.log(formatteddate)

   
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
            {formatteddate}
        </nav>
        
    )
}  