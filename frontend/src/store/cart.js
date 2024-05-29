import csrfFetch from './csrf'


const RECEIVE_CART_ITEMS = 'cart/RECEIVE_CART_ITEMS'
const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM'
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM'
const CLEAR_CART = 'cart/CLEAR_CART'


export const clearCart = cart => ({
    type: CLEAR_CART,
})

export const receiveCartItem = cart => ({
    type: RECEIVE_CART_ITEM,
    cart
})

export const receiveCartItems = cart => ({
    type: RECEIVE_CART_ITEMS,
    cart
})

 export const deleteCartItem = cartId =>({
    type: REMOVE_CART_ITEM,
    cartId
 })
 

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
    debugger;
    const res = await csrfFetch(`/api/carts/${cartId}`,{
        method: 'DELETE',
        body: JSON.stringify(cartId),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    debugger;
    const data = await res.json();
    debugger;

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
            return {...nextState, ...action.cart};
        case REMOVE_CART_ITEM:
            return {...nextState, [action.cartId]:undefined}
            return nextState;
        case CLEAR_CART:
            return {};
        default:
            return state;
    }
}

export default cartsReducer;


