import React from "react";
import {BiArrowBack} from 'react-icons/bi';
import { BackCont } from "../../../styles/addIncome/addIncome";
import { Link } from "react-router-dom";

export default function Back(){
    return(
        <BackCont>
        <Link to={'/home'}>
        <button>

            <BiArrowBack/>
        </button>
        </Link>
        </BackCont>
    )
}