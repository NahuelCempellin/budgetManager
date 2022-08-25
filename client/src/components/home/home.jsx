import React,{useEffect,useState} from "react";
import {useDispatch} from 'react-redux';
import NavHome from "../navbar/navHome/navHome";
import { LogoutNav } from "../navbar/navHome/logout";
import { HomeCont } from "../../styles/home/home";


export default function Home(){
const logdata=localStorage.getItem('login');
const Data= JSON.parse(logdata);
console.log(Data)

useEffect(()=>{

},[logdata.length !== 0])

let amountIncome= Data.incomes.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0);
let amountExpenses= Data.expenses.map(el=> el.amount).reduce((prev, curr) => prev + curr, 0);
let Balance= amountIncome - amountExpenses;



let incomes= Data.incomes.map(el=> el);
let expenses= Data.expenses.map(el=> el);

const cards= [...incomes, ...expenses];

console.log(cards)



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