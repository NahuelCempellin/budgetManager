import React from "react";
import { Link } from "react-router-dom";
import { LoginNav } from "../../../styles/navbar/nav";


export default function LogButton(){
    return(
        <LoginNav>
            <Link to=''>
            <a>Register</a>
            </Link>
        </LoginNav>
    )
}