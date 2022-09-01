import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { RegisterCont } from "../../styles/login/login";
import { Link, useNavigate } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi';
import { createUser } from "../../reducer/actions";


export default function Register(){
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const [user, setUser]= useState({
        name:'',
        surname:'',
        mail:'',
        password:''
    })

    function setRegister(){
        alert('User created successfully!')
        dispatch(createUser(user))
        navigate('/')
    }
    
    return(
        <RegisterCont>
            <div className="nav">
                <Link to='/'>
                <button><BiArrowBack/></button> 
                </Link>  
            </div>

            <div className="logCont">

                <div className="inner">
                <h2>Register</h2>

                <div className="inputs">
                <input placeholder="Name" value={user.name} onChange={(e)=>setUser({...user, name: e.target.value})}/>
                <input  placeholder="Surname" value={user.surname} onChange={(e)=>setUser({...user,surname: e.target.value})} />
                <input placeholder="e-mail" value={user.mail} onChange={(e)=>setUser({...user, mail: e.target.value})}/>
                <input  placeholder="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}/>
                </div>
                
                <div className="buttons">
                    <button onClick={setRegister}>Send</button>
                </div>
                
                </div>
            </div>



        </RegisterCont>
    )
}