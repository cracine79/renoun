const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES'
const RECEIVE_FAVORITE = 'favorites/RECEIVE_FAVORITE'
const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE'




export const receiveFavorites = favorites =>({
    type: RECEIVE_FAVORITES,
    favorites
})



export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const createFavorite = favorite => async dispatch => {

    const res = await csrfFetch('/api/favorites',{
        method: 'POST',
        body: JSON.stringify(favorite),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(receiveFavorite(data))
}

export const deleteFavorite = favoriteId => async dispatch => {
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE',
        body :JSON.stringify(favoriteId),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(removeFavorite(data))
}


export const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};


    switch (action.type){
        case RECEIVE_FAVORITES:
            return {...action.favorites};
        case RECEIVE_FAVORITE:
            nextState[action.favorite.id] = action.favorite
            return  {...nextState};
        case REMOVE_FAVORITE:
            delete nextState[action.favoriteId]
        default:
            return nextState;
    }
}