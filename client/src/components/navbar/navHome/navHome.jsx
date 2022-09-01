import React from "react";
import { NavHomeCont } from "../../../styles/home/home";
import { Link } from "react-router-dom";

export default function NavHome(){
    return(
        <NavHomeCont>
            <Link to={'/addincome'}>
            <div>Add Income</div>
            </Link>
            <Link to={'/addexpenses'}>
            <div>Add Expenses</div>
            </Link>
            <Link to={'/movements'}>
            <div>View last movements</div>
            </Link>
        </NavHomeCont>
    )
}