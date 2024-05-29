
import csrfFetch from "./csrf"
const RECEIVE_INSTRUMENT = 'instrument/RECEIVE_INSTRUMENT'
const RECEIVE_INSTRUMENTS = 'instrument/RECEIVE_INSTRUMENTS'
const REMOVE_INSTRUMENT = 'instrument/REMOVE_INSTRUMENT'

export const receiveInstrument = instrument => ({
    type: RECEIVE_INSTRUMENT,
    instrument
})


export const receiveInstruments = instruments => ({
    type: RECEIVE_INSTRUMENTS,
    instruments
})

export const deleteInstrument = instrumentId => ({
    type: REMOVE_INSTRUMENT,
    instrumentId
})

export const fetchAllInstruments = () => async dispatch => {

    const res = await csrfFetch('/api/instruments');
  
    const data = await res.json();

    dispatch(receiveInstruments(data))
}

export const removeInstrument = () => async dispatch => {
        const res = await csrfFetch('/api/instruments',{
            method: 'DELETE'
        });
        const data = await res.json();
        if (data.ok){
            dispatch(deleteInstrument)
        } else {
            console.log.res.error
        }

}

const instrumentsReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch (action.type){
        case RECEIVE_INSTRUMENTS:
            return {...nextState, ...action.instruments};
        default:
            return state;
        
        case REMOVE_INSTRUMENT:
            return {...nextState, [action.instrumentId]: undefined}
    }



}

export default instrumentsReducer;