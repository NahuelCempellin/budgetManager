import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { incomeID } from "../../reducer/actions";
import { MovementIDCont } from "../../styles/movementsId/movementsid";
import Back from "../navbar/back/back";
import {BiEditAlt} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import { TitleCont } from "../../styles/addIncome/addIncome";
import { IncomeCont } from "../../styles/addIncome/addIncome";
import { Formadd } from "../../styles/addIncome/addIncome";
import { ButtonCont } from "../../styles/addIncome/addIncome";
import { deleteIncome, editIncome, editExpenses } from "../../reducer/actions";





export default function MovementsID(){
    const {id}= useParams();
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const movement= useSelector((state)=> state.incomeId);
    const userIDstr= localStorage.getItem('login');
    const userID= JSON.parse(userIDstr)
    const [edit, setEdit]= useState(false);
    const [income, setIncome]= useState({
        Concept:'',
        amount:'',
        date:'',
        type:movement.type,
        category:'',
        id: movement.id
    })

    function editAppears(){
        setEdit(true)
    }
    function editDesappears(){
        setEdit(false)
    }

    function hadlerAccept(){

      

        if(income.type === 'income'){
            
        dispatch(editIncome(income))
        navigate('/home')
        }else if (income.type === 'expenses'){
            
            dispatch(editExpenses(income))
            navigate('/home')
        }

        
    }

    function handlerDelete(id){
       
        alert('Deleted success')
        dispatch(deleteIncome(id))
        navigate('/home')
    }


    

    useEffect(()=>{
        dispatch(incomeID(id))
    },[])

    
    return(
        <MovementIDCont>
            <Back/>
            <TitleCont>
            <h1>Movements</h1>
            </TitleCont>

            <div className="card">
                 <div className="concept">
                    <h3>{movement.Concept}</h3>
                    <p>{"Category: "+ movement.category}</p>
                    <p>{"Type: "+movement.type}</p>
                    </div>
                    <div className="date">
                    <p className="d">{movement.date}</p>
                    <div className="ContDelete">
                    <div>                           
                    <a onClick={()=>handlerDelete(movement.id)}>
                    <AiOutlineDelete/>
                    </a>
                    <a onClick={editAppears}>
                    <BiEditAlt/>
                    </a>               
                    </div>
                    <h2>{"$"+ movement.amount}</h2>
                    </div>
                    </div>
            </div>


{   edit === true?
            <IncomeCont>
            <TitleCont>
                <h1>Edit movement</h1>
            </TitleCont>

            <Formadd>
            <input value={income.Concept} onChange={(e)=> setIncome({...income, Concept: e.target.value})} placeholder="Concept..."/>
                <input value={income.amount} onChange={(e)=> setIncome({...income, amount: e.target.value})} placeholder="Amount..."/>
                <input value={income.date} onChange={(e)=> setIncome({...income, date:e.target.value})} placeholder="Date..."/>
                <input value={income.category}  onChange={(e)=> setIncome({...income, category: e.target.value})}placeholder="Category..."/>
            </Formadd>

            <ButtonCont>
            <button onClick={hadlerAccept}>Accept</button>
            <button onClick={editDesappears}>Decline</button>
            </ButtonCont>
        </IncomeCont>
    : null    
    }

        </MovementIDCont>
    )
}