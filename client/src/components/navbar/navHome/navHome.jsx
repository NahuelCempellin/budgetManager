import React from "react";
import { NavHomeCont } from "../../../styles/home/home";

export default function NavHome(){
    return(
        <NavHomeCont>
            <a>Add Income</a>
            <a>Add Expenses</a>
            <a>View last movements</a>
        </NavHomeCont>
    )
}