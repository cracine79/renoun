import csrfFetch from './csrf'


const RECEIVE_CART_ITEMS = 'cart/RECEIVE_CART_ITEMS'
const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM'
const REMOVE_CART_ITEM = 'cart/REMVE_CART_ITEM'



export const receiveCartItem = cart => ({
    type: RECEIVE_CART_ITEM,
    cart
})

export const receiveCartItems = carts => ({
    type: RECEIVE_CART_ITEMS,
    carts
})

 export const deleteCartItem = cartId =>{
    type: REMOVE_CART_ITEM
 }
 

export const fetchAllCarts = () => async dispatch => {
    const res = await csrfFetch('/api/carts');
    const data = await res.json();
    dispatch(receiveCartItems(data))
}

export const createCartItem = cart => async dispatch => {
    const res = await csrfFetch('/api/carts',{
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(receiveCartItem(data))
}

export const removeCartItem = cartId => async dispatch => {
    const res = await csrfFetch(`/api/carts/${cartId}`,{
        method: 'DELETE',
        body: JSON.stringify(cartId),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(deleteCartItem(data))
}

export const cartsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type){
        case RECEIVE_CART_ITEM:
            nextState[action.cart.id] = action.cart
            return nextState;
        case RECEIVE_CART_ITEMS:
            return {...nextState, ...action.carts};
        case REMOVE_CART_ITEM:
            delete nextState[action.cartId];
            return nextState;
        default:
            return state;s
    }
}

export default cartsReducer;


