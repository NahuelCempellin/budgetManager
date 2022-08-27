import React,{useEffect} from "react";
import { LandingDiv } from "../../styles/landing/landing";
import Spline from '@splinetool/react-spline'
import { SpDiv, Text} from "../../styles/landing/landing";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";


export default function LandingPage(){


    useEffect(()=>{
    localStorage.clear('login')
    localStorage.removeItem('login')
    },[])
    return(
        <LandingDiv>
            
            <Text>
            <div>
            <h2>The most trusted</h2>
            <h1>Budget manager</h1>
            </div>
            <Link to='/login'>
            <button>Continue with email</button>
            </Link>
            </Text>

            <SpDiv>
            <div>
            <Spline scene="https://prod.spline.design/T8jpK5ocOXKMlmvM/scene.splinecode" />
            </div>
            </SpDiv>
            <Navbar/>
        </LandingDiv>
    )
}