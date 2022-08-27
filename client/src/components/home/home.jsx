import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import NavHome from "../navbar/navHome/navHome";
import { LogoutNav } from "../navbar/navHome/logout";
import { HomeCont } from "../../styles/home/home";
import { getUser } from "../../reducer/actions";

export default function Home(){
const userData= useSelector((state)=> state.login)
const dispatch= useDispatch();
const logdata=localStorage.getItem('login');
const Data= JSON.parse(logdata);

const user= {
    name: Data.name,
    surname: Data.surname
}


useEffect(()=>{
    dispatch(getUser(user))
    
    },[])

const us= useSelector((state)=> state.user)





let amountIncome= userData.incomes.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0);
let amountExpenses= userData.expenses.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0);
let Balance= amountIncome - amountExpenses;



let incomes= userData.incomes.map(el=> el);
let expenses= userData.expenses.map(el=> el);

const cards= [...incomes, ...expenses];





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
                <h1>{`$${Balance}`}</h1>
            </div>
            </div>
            <div className="listCont">
                <ul>
                    {
                        cards.map(el=>{
                            return(
                                <div className="card" key={el.id}>
                                    <div className="concept">
                                    <h3>{el.Concept}</h3>
                                    <p>{"Category: "+ el.category}</p>
                                    <p>{"Type: "+el.type}</p>
                                    </div>

                                    <div className="date">
                                    <p className="d">{el.date}</p>
                                    <h2>{"$"+ el.amount}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>

        </HomeCont>
    )
}