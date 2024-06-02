import csrfFetch from "./csrf";


const RECEIVE_REVIEWS = 'review/RECIEVE_REVIEWS'
const RECEIVE_REVIEW = 'review/RECDEIVE_REVIEW'

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const fetchAllReviews = (sellerId) => async dispatch => {

    const res = await csrfFetch(`/api/seller_reviews/${sellerId}`)
    if (res.ok){
        const data = await res.json();
        dispatch(receiveReviews(data))
    }

}

export const createReview = (review) => async dispatch => {
    const res = await csrfFetch('/api/seller_reviews', {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(receiveReview(data))
}

export const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type){
        case RECEIVE_REVIEW: 
            nextState[action.review.id] = action.review
            return nextState;
        case RECEIVE_REVIEWS:
            return {...action.reviews}
        default: 
            return state;
    }

}