import csrfFetch from "./csrf";


const RECEIVE_INST_REVIEWS = 'review/RECEIVE_INST_REVIEWS'
const RECEIVE_INST_REVIEW = 'review/RECEIVE_INST_REVIEW'

export const receiveReviews = reviews => ({
    type: RECEIVE_INST_REVIEWS,
    reviews
})

export const receiveReveiw = review => ({
    type: RECEIVE_INST_REVIEW,
    review
})

export const fetchAllInstrumentReviews = (instrumentId) => async dispatch => {
    const res = await csrfFetch(`/api/instruments/${instrumentId}/instrument_reviews`)
    if(res.ok){
        const data = await res.json();
        dispatch(receiveReviews(data))
    }
}

export const instrumentReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type){
        case RECEIVE_INST_REVIEWS:
            return {...action.reviews} 
        default: 
            return nextState;
    }

}