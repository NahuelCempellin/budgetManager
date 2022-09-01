import axios from 'axios'
import { Login, GET_LOGIN,LOGIN_ERROR, GET_LOGOUT,USER_URL,GET_USER,POST_INCOME_URL,
  POST_INCOME,POST_EXPENSES_URL,POST_EXPENSES,DELETE_INCOME,DELETE_INCOME_URL,INCOME_ID,INCOME_ID_URL,EXPENSES_ID,EXPENSES_ID_URL,EDIT_INCOME,EDIT_INCOME_URL,CREATE_USER_URL,CREATE_USER, GET_ARRAY,USER_ID_URL,GET_USER_BY_ID, ORDER_INCOME_EXPENSES,EDIT_EXPENSES,EDIT_EXPENSES_URL} from "../constants/constants";



export function incomeExpenseOrder(payload){
  return({
    type: ORDER_INCOME_EXPENSES,
    payload
  })
}



export function actualize(){
  return function(dispatch){
    dispatch({
      type: GET_ARRAY
    })
  }
}

export function getUSerById(id){
  return async function (dispatch){
    try{
        const userId= await axios.get(USER_ID_URL+id);
       

        return dispatch({
            type: GET_USER_BY_ID,
            payload: userId.data
        })
    }catch(error){
        
        console.log(error)
    }
  }
}



  export function expensesID(id){
    return async function (dispatch){
      try{
          const expensesData= await axios.post(EXPENSES_ID_URL,id);
         

          return dispatch({
              type: EXPENSES_ID,
              payload: expensesData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }


  export function incomeID(id){
    
    return async function (dispatch){
      try{
          const incomeData= await axios.get(INCOME_ID_URL+id);
        
          return dispatch({
              type: INCOME_ID,
              payload: incomeData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }

export function editIncome(income){
   
    return async function (dispatch){
      try{
          const incomeData= await axios.put(EDIT_INCOME_URL, income);
          
          return dispatch({
              type: EDIT_INCOME,
              payload: incomeData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }

  export function editExpenses(income){
    
    return async function (dispatch){
      try{
          const incomeData= await axios.put(EDIT_EXPENSES_URL,income);
          
          return dispatch({
              type: EDIT_EXPENSES,
              payload: incomeData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }



  export function deleteIncome(id){
   
    return async function (dispatch){
      try{
          const incomeData= await axios.delete(DELETE_INCOME_URL+`?id=${id}`);
        

          return dispatch({
              type: DELETE_INCOME,
              payload: incomeData.data
          })
      }catch(error){
          
          console.log(error)
      }
    }
  }


  export function postIncome(income){
    
    return async function (dispatch){
      try{
          const incomeData= await axios.post(POST_INCOME_URL,income);
         

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
    
    return async function (dispatch){
      try{
          const expensesData= await axios.post(POST_EXPENSES_URL,income);
         

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


export function createUser(user){
    
  return async function (dispatch){
    try{
        const userData= await axios.post(CREATE_USER_URL,user)
       
        return dispatch({
            type: CREATE_USER,
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