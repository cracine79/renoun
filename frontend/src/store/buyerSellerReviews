const RECEIVE_BUYER_SELLER_REVIEWS = 'buyer_seller_review/RECEIVE_REVIEWS'


export const receiveBuyerReviews = reviews =>({
    type: RECEIVE_BUYER_SELLER_REVIEWS,
    reviews
})

export const buyerSellerReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type){
        case RECEIVE_BUYER_SELLER_REVIEWS:
            return {...action.reviews};
        default:
            return state;
    }
}


