import { GET_LOGIN, LOGIN_ERROR, GET_LOGOUT } from "../constants/constants";

const initialState={
    login:[],
    logError: false

};

const reducer= (state= initialState,action)=>{
    switch(action.type){
        case GET_LOGIN:
            return{
                ...state,
                logError:false,
                login: action.payload
            }
        case LOGIN_ERROR:
            return{
                ...state,
                logError: true,
                login: []
            }  
            
        case GET_LOGOUT:
            return{
                ...state,
                logError: true,
                login:[]
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;