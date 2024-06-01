import csrfFetch from "./csrf";


const RECEIVE_ORDERS = 'orders/RECEIVE_ORDERS'
const CREATE_ORDER = 'orders/CREATE_ORDER'
const CLEAR_ORDERS = 'orders/CLEAR_ORDERS'


export const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
})

export const clearOrders = () => ({
    type: CLEAR_ORDERS
})

export const createOrder = userId => async dispatch =>{
        debugger;
    let res = await csrfFetch(`/api/users/${userId}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    debugger;
    if (res.ok){
        let data = await res.json();
       
        dispatch(receiveOrders(data))
    } else {
        console.log.res.errors.full_messages
    }

    
    
}

export const ordersReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch(action.type){
        case RECEIVE_ORDERS:
            return {...nextState, ...action.orders};
        case CLEAR_ORDERS:
            return {};
        default:
            return nextState;
    }
}

export default ordersReducer;