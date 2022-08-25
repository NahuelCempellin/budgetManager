import axios from 'axios'
import { Login, GET_LOGIN,LOGIN_ERROR, GET_LOGOUT} from "../constants/constants";



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


export function getLogout(){
  return{
    type: GET_LOGOUT
  }
}