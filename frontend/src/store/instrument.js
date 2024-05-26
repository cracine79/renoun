
import csrfFetch from "./csrf"
const RECEIVE_INSTRUMENT = 'instrument/RECEIVE_INSTRUMENT'
const RECEIVE_INSTRUMENTS = 'instrument/RECEIVE_INSTRUMENTS'

export const receiveInstrument = instrument => ({
    type: RECEIVE_INSTRUMENT,
    instrument
})


export const receiveInstruments = instruments => ({
    type: RECEIVE_INSTRUMENTS,
    instruments
})

export const fetchAllInstruments = () => async dispatch => {
    const res = await csrfFetch('api/instruments');
    const data = await res.json();
    dispatch(receiveInstruments(data))
}

const instrumentsReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch (action.type){
        case RECEIVE_INSTRUMENTS:
            return {...nextState, ...action.instruments};
        default:
            return state;
    }


}

export default instrumentsReducer;