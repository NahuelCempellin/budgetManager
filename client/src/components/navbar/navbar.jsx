import React from "react";
import Logo from "./logo";
import LogButton from "./NavLogout/loginbutton";
import { Nav } from "../../styles/navbar/nav";

export default function Navbar(){
    return(
        <Nav>
            <LogButton/>
        </Nav>
    )
}