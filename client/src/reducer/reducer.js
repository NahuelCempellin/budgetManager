import { GET_LOGIN, LOGIN_ERROR, GET_LOGOUT, GET_USER,POST_INCOME,POST_EXPENSES} from "../constants/constants";

const initialState={
    login:[],
    logError: false,
    user:[]

};

const reducer= (state= initialState,action)=>{
    switch(action.type){
        case POST_INCOME:
            return{
                ...state
            }
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
                login:[],
                user:[]
            }

        case GET_USER:
            return{
                ...state,
                user: action.payload
            }    

        default:
            return{
                ...state
            }
    }
}

export default reducer;