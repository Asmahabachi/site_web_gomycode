import {SINGIN,SINGUP,GET_USER, CURRENT} from '../actionTypes/action-type'



const initialState = {
     user:{},
     signin:{},
     signup:{},
     currentUser: {},

}

const UserReducer =(state=initialState,action )=> {
    
    switch (action.type) {

        case SINGIN: 
        console.log(action.payload);
        return{
            ...state,
            signin: action.payload
        }

        case SINGUP:
        console.log(action.payload);
        return{
            ...state,
            signup: action.payload
        }

        case GET_USER: 
        return{
            ...state,
            user: action.payload
        }
        
        case CURRENT: 
        return{
            ...state,
            currentUser: action.payload
        }
        default:return state
    }
}

export default UserReducer