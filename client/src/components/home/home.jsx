import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import NavHome from "../navbar/navHome/navHome";
import { LogoutNav } from "../navbar/navHome/logout";
import { HomeCont } from "../../styles/home/home";
import {  getUSerById } from "../../reducer/actions";
import CardHome from "./cardHome";

export default function Home(){
const userData= useSelector((state)=>state.userId)
const dispatch= useDispatch();
const [user,setUser]= useState(false)
const logdata=localStorage.getItem('login');
const Data= JSON.parse(logdata);

const id= Data.id



useEffect(()=>{
    dispatch(getUSerById(id))
    setUser(true)
},[])


const amountIncome=  user === true ?   userData.incomes.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0) : 'soy un forro';
const amountExpenses=  user === true ?  userData.expenses.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0) : 'soy un forro';
const balance= amountIncome - amountExpenses;












    return(
        <HomeCont>
            <LogoutNav/>
            <div className="contcont">
            <div className="recive">
            <h3>{`Hi ${Data.name}!!`}</h3>
            <p>The price is what you pay. The value is what you receive.</p>
            </div>
            <NavHome/>

            <div className="balance">
                <h2>Actual balance:</h2>
                <h1>{ balance < 0 ? 0 : `$${balance}`}</h1>
            </div>
            </div>
            {
                
            <CardHome key={balance}/>
}
        </HomeCont>
    )
}