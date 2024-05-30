import csrfFetch from "./csrf";


const RECEIVE_ORDERS = 'orders/RECEIVE_ORDERS'


export const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
})

export const ordersReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch(action.type){
        case RECEIVE_ORDERS:
            return {...nextState, ...action.orders};
        default:
            return nextState;
    }
}

export default ordersReducer;