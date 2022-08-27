import axios from 'axios'
import { Login, GET_LOGIN,LOGIN_ERROR, GET_LOGOUT,USER_URL,GET_USER,POST_INCOME_URL,
  POST_INCOME,POST_EXPENSES_URL,POST_EXPENSES} from "../constants/constants";



  export function postIncome(income){
    console.log(income)
    return async function (dispatch){
      try{
          const incomeData= await axios.post(POST_INCOME_URL,income);
         console.log(incomeData.data)

          return dispatch({
              type: POST_INCOME,
              payload: incomeData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }

  
  export function postExpenses(income){
    console.log(income)
    return async function (dispatch){
      try{
          const expensesData= await axios.post(POST_EXPENSES_URL,income);
         console.log(expensesData)

          return dispatch({
              type: POST_EXPENSES,
              payload: expensesData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }


export function getLogin(log){
    
  return async function (dispatch){
    try{
        const login= await axios.post(Login,log);
       
        return dispatch({
            type: GET_LOGIN,
            payload: login.data
        })
    }catch(error){
        if(error){
          dispatch({
            type: LOGIN_ERROR
          })
        }
        console.log(error)
    }
  }
}

export function getUser(user){
    
  return async function (dispatch){
    try{
        const userData= await axios.post(USER_URL,user)
        
        return dispatch({
            type: GET_USER,
            payload: userData.data
        })
    }catch(error){
        
        console.log(error)
    }
  }
}


export function getLogout(){
  return{
    type: GET_LOGOUT
  }
}