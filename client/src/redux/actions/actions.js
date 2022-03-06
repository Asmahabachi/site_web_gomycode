import {SINGIN,SINGUP,GET_USER,CURRENT} from '../actionTypes/action-type'
import axios from 'axios'



// backend actions with axios
// user, history
export const singnIN = (userData,history) => async (dispatch) =>{
        
       try {
           const userwhosingin = await axios.post('http://localhost:5000/signin',userData);
           dispatch({
               type:SINGIN,
               payload: userwhosingin.data
           })
           console.log(userwhosingin.data)
           dispatch(currentUser(userwhosingin.data.token,history))
        } catch (error) {
            console.log(error)
        }
    }

        


export const singnUp = (userData) => async (dispatch) =>{
    try {
        const userwhosingup = await axios.post('http://localhost:5000/signup',userData);
        dispatch({
            type:SINGUP,
            payload: userwhosingup.data 
        })
    } catch (error) {
        console.log(error)
    }

}

 export const current_user = () => async (dispatch) =>{

    try {
        const user = await axios.get('http://localhost:5000/current');
        dispatch({
            type:GET_USER,
            payload: user.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const currentUser = (token,history) => async (dispatch) => {
  
    const config = { headers :{authorization: token }}
     try {
         const user = await axios.get('http://localhost:5000/api/current',config)
         dispatch({
             type:CURRENT,
             payload: user.data
         })
        localStorage.setItem('current_user', JSON.stringify(user.data));
         history.push('/LeylaNjim')
     } catch (error) {
        console.log(error)   
     }
}