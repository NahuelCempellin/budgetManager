import React from "react";
import {FaMoneyBillWave} from 'react-icons/fa';
import { LogoDiv } from "../../styles/navbar/nav";


export default function Logo(){
    return(
        <LogoDiv>
            <div className="image"><FaMoneyBillWave/></div>
            <div>
                BudgetManager
            </div>
        </LogoDiv>
    )
}