import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Back from "../navbar/back/back";
import { MovementsCont } from "../../styles/Movements/movements";
import { TitleCont } from "../../styles/addIncome/addIncome";
import {AiOutlineUnorderedList} from 'react-icons/ai';
import { getUSerById } from "../../reducer/actions";




export default function LastMovements(){
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const userData= useSelector((state)=>state.userId)
    const [user,setUser]= useState(false)
    const idSTR= localStorage.getItem('login')
    const id= JSON.parse(idSTR)

    useEffect(()=>{
        dispatch(getUSerById(id.id))
       setUser(true)
        
    },[])

    const incomes=  user === true ? userData.incomes.map(el=> el) : '';
    const expenses=  user === true ? userData.expenses.map(el=> el) : '';
    const cards= [...incomes, ...expenses];
   
    const [filter,setFilter]= useState('');
    const filterCards= filter === 'all' || filter === '' ? cards : filter === 'income' ? cards.filter(el=> el.type === 'income') : cards.filter(el=> el.type === 'expenses');
    

    useEffect(()=>{
        dispatch(getUSerById(id.id))
        
    },[user === true])


    function handleOrder(e){
        

        e.target.value === 'all' ? setFilter('all')
        : e.target.value === 'income' ? setFilter('income')
        : setFilter('expenses')


    }

    return(
        <MovementsCont>
            <Back/>
            <TitleCont>
            <h1>Last Movements</h1>
            </TitleCont>
            <div className="selectCont">
                <select onChange={(e)=>handleOrder(e)}>
                    <option value={'all'}>Order items</option>
                    <option value={'income'}>Income</option>
                    <option value={'expenses'}>Expenses</option>
                </select>
            </div>


            <div className="listCont">
                <ul>
                    {
                        filterCards.map(el=>{
                            return(
                                <div className="card">
                                    <div className="concept">
                                    <h3>{el.Concept}</h3>
                                    <p>{"Category: "+ el.category}</p>
                                    <p>{"Type: "+el.type}</p>
                                    </div>

                                    <div className="date">
                                    <p className="d">{el.date}</p>

                                    <div className="ContDelete">
                                    <div>
                                        
                                        <Link to={`/movements/${el.id}`}>
                                        <AiOutlineUnorderedList/>
                                        </Link>
                                        
                                    </div>
                                    <h2>{"$"+ el.amount}</h2>

                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </MovementsCont>
    )
}