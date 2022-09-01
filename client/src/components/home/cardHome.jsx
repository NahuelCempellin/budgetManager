import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContCards } from "../../styles/home/home";
import { getUSerById } from "../../reducer/actions";




export default function CardHome(){
   
    const dispatch = useDispatch();
    const [user,setUser]= useState(false)
    const userData= useSelector((state)=>state.userId)
    const idSTR= localStorage.getItem('login')
    const id= JSON.parse(idSTR)

    useEffect(()=>{
        dispatch(getUSerById(id.id))
       setUser(true)
        
    },[])

 


const incomes=  user === true ? userData.incomes.map(el=> el) : 'soy un forro';
const expenses=  user === true ? userData.expenses.map(el=> el) : 'soy un forro';
const cards= [...incomes, ...expenses];


useEffect(()=>{
    dispatch(getUSerById(id.id))
    
},[user === true])

    return(
        <ContCards>
            <ul key={id}>
                    {
                        
                        cards.map(el=>{
                            return(
                                <div className="card" key={el.id}>
                                    <div className="concept" key={el.Concept}>
                                    <h3 key={el.Concept}>{el.Concept}</h3>
                                    <p key={el.category}>{"Category: "+ el.category}</p>
                                    <p key={el.type}>{"Type: "+el.type}</p>
                                    </div>

                                    <div className="date" key={el.date}>
                                    <p className="d" key={el.date}>{el.date}</p>
                                    <h2 key={el.amount}>{"$"+ el.amount}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
        </ContCards>
    )
}