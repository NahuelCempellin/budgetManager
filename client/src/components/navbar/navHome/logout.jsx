import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import { LogoutCont } from "../../../styles/login/logout";
import { getLogout } from "../../../reducer/actions";

export function LogoutNav(){
    const navigate= useNavigate();
    const dispatch = useDispatch();


    function Logout(){
        dispatch(getLogout())
        localStorage.clear('login')
        navigate('/')
    }

    

    return(
        <LogoutCont>
            <div className="out">
                <a onClick={Logout}>Logout</a>
            </div>
        </LogoutCont>
    )
}