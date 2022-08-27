import React,{useState} from "react";
import{useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { IncomeCont, Formadd, ButtonCont, TitleCont } from "../../styles/addIncome/addIncome";
import Back from "../navbar/back/back";
import  {postIncome} from '../../reducer/actions';

export default function AddIncome(){
    const userIDstr= localStorage.getItem('login');
    const userID= JSON.parse(userIDstr)
    const dispatch= useDispatch();
    const navigate= useNavigate()
    const [income, setIncome]= useState({
        Concept:'',
        amount:'',
        date:'',
        type:'',
        type:'',
        category:'',
        id:userID.id
    })


    function hadlerAccept(){
        dispatch(postIncome(income))
        navigate('/home')
    }

    function Decline(){
        navigate('/home')
    }

    return(
        <IncomeCont>
            <Back/>
            <TitleCont>
                <h1>Add Income</h1>
            </TitleCont>

            <Formadd>
                <input value={income.Concept} onChange={(e)=> setIncome({...income, Concept: e.target.value})} placeholder="Concept..."/>
                <input value={income.amount} onChange={(e)=> setIncome({...income, amount: e.target.value})} placeholder="Amount..."/>
                <input value={income.date} onChange={(e)=> setIncome({...income, date:e.target.value})} placeholder="Date..."/>
                <input value={income.type} onChange={(e)=> setIncome({...income, type: e.target.value})} placeholder="Type..."/>
                <input value={income.category}  onChange={(e)=> setIncome({...income, category: e.target.value})}placeholder="Category..."/>
            </Formadd>

            <ButtonCont>
                <button onClick={hadlerAccept}>Accept</button>
                
                <button onClick={Decline}>Decline</button>
               
            </ButtonCont>
        </IncomeCont>
    )
}