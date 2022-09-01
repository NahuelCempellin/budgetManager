import { GET_LOGIN, LOGIN_ERROR, GET_LOGOUT, GET_USER,POST_INCOME,DELETE_INCOME,DELETE_EXPENSES,EXPENSES_ID,INCOME_ID,CREATE_USER,GET_USER_BY_ID,ORDER_INCOME_EXPENSES} from "../constants/constants";


const initialState={
    login:[],
    getUser:[],
    logError: false,
    user:[],
    incomeId:[],
    expensesId:[],
    cards:[],
    Balance:[],
    userId:[],
    orderUser:[]

};

const reducer= (state= initialState,action)=>{
    switch(action.type){

        case ORDER_INCOME_EXPENSES:
            
            return{
                ...state

            }

        case CREATE_USER:
            return{
                ...state
            }
        case INCOME_ID:
            return{
                ...state,
                incomeId: action.payload
            }
        case EXPENSES_ID:
        return{
            ...state,
            expensesId: action.payload
        }

        case DELETE_EXPENSES:
            return{
                ...state
            }
        case DELETE_INCOME:
            return{
                ...state
            }
        case POST_INCOME:
            return{
                ...state
            }
        case GET_LOGIN:
            return{
                ...state,
                logError:false,
                login: action.payload,
                getUser:action.payload
            }
        
        case GET_USER_BY_ID:
           
            return{
                ...state,
                userId: action.payload,
                orderUser: action.payload
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