
import csrfFetch from "./csrf"
import { storeCSRFToken } from "./csrf"
const RECEIVE_INSTRUMENT = 'instrument/RECEIVE_INSTRUMENT'
const RECEIVE_INSTRUMENTS = 'instrument/RECEIVE_INSTRUMENTS'
const REMOVE_INSTRUMENT = 'instrument/REMOVE_INSTRUMENT'
const UPDATE_INSTRUMENT = 'instrument/UPDATE_INSTRUMENT'

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

export const updateInstrument = instrument => ({

    type: UPDATE_INSTRUMENT,
    instrument
})

export const fetchAllInstruments = () => async dispatch => {

    const res = await csrfFetch('/api/instruments');
    storeCSRFToken(res)
    const data = await res.json();
    dispatch(receiveInstruments(data))
}

export const fetchInstruments = search => async dispatch => {
    const res = await csrfFetch(`api/instruments/search=${search}`)
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
            return res.error
        }
}

export const fetchInstrument = (instrumentId) => async dispatch => {
  
    const res = await csrfFetch(`/api/instruments/${instrumentId}`)
    const data = await res.json()

    if (res.ok){
        dispatch (updateInstrument(data))
    } else {
        return res.error
    }
    }
    

export const updateInstrumentDetails = (instrument) => async dispatch => {
    const res = await csrfFetch(`/api/instruments/${instrument.id}`,{
        method: 'PUT',
        body: JSON.stringify(instrument),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    if (res.ok){
        let data = await res.json();
        dispatch(updateInstrument(data))
    }
}

const instrumentsReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state};

    switch (action.type){
        case RECEIVE_INSTRUMENTS:
            return {...action.instruments};
    
   
        
        case REMOVE_INSTRUMENT:
            return {...nextState, [action.instrumentId]: undefined}
        case UPDATE_INSTRUMENT:
      
            nextState[action.instrument.id] = action.instrument
            return nextState
        default:
            return state;
    }



}

export default instrumentsReducer;