import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { LoginCont } from "../../styles/login/login";
import {BiArrowBack} from 'react-icons/bi';
import { getLogin } from "../../reducer/actions";




export default function LoginPage(){
    const login= useSelector((state)=> state.login)
    const loginController= useSelector((state)=> state.logError)
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [log,setLog]=useState({
        mail: '',
        password: ''
    })

    
   

    useEffect(()=>{
        if(loginController === true){
           console.log('Authentication error')
        }else{
            localStorage.setItem('login', JSON.stringify(login));
            const view= localStorage.getItem('login')
            console.log(view)
            console.log('holis')
            // navigate('/home')
        }

        return()=>{}
    },[login])


    function handlerLogin(){
        if(log.mail && log.password){
             dispatch(getLogin(log))

        }        
    }

    

    return(
        <LoginCont>
            <div className="nav">
                <Link to='/'>
                <button><BiArrowBack/></button> 
                </Link>  
            </div>

            <div className="logCont">

                <div className="inner">
                <h2>Welcome back!</h2>

                <div className="inputs">
                <input placeholder="e-mail" value={log.mail} onChange={(e)=> setLog({...log, mail:e.target.value})}/>
                <input type='password' placeholder="password" value={log.password} onChange={(e)=> setLog({...log, password:e.target.value})}/>
                </div>
                
                <div className="buttons">
                    <button onClick={handlerLogin}>Login</button>
                    <button>Register</button>
                </div>
                
                </div>
            </div>



        </LoginCont>
    )
}