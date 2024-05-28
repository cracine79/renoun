import csrfFetch from "./csrf"
import { receiveCartItems } from "./cart"

const RECEIVE_USER = 'session/RECEIVE_USER'
const REMOVE_USER = 'session/REMOVE_USER'

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
}) 

export const removeUser = () => ({
    type: REMOVE_USER,
})


const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  };

export const login = user => async dispatch => {
    let res = await csrfFetch('api/session', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    let data = await res.json();

    sessionStorage.setItem('currentUser', JSON.stringify(data.user))
    debugger;
    dispatch(receiveUser(data.user));
    dispatch(receiveCartItems(data.cart))
  
    return res;
}

export const logout = () => async dispatch => {

    let res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })

    dispatch(removeUser());
    return res
}

export const signup = user => async dispatch => {
    
    let res = await csrfFetch('/api/users',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    let data = await res.json();

    sessionStorage.setItem('currentUser', JSON.stringify(data.user))
    dispatch(receiveUser(data.user));
    return res;
}

export const restoreSession = () => async dispatch => {

    let res = await csrfFetch('/api/session');
    storeCSRFToken(res);

    let data = await res.json();
   
    dispatch(receiveUser(data.user));
    dispatch(receiveCartItems(data.cart))
    return res;
}


const sessionReducer = (state = {user: null}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch(action.type){
        case RECEIVE_USER:
 
            nextState['user'] = action.user;
            return nextState;
        case REMOVE_USER:
            return {...nextState, user: null }
        default:
            return state;
        
    }
}

export default sessionReducer;