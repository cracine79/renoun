
import './instrumentReviews.css'
import { fetchAllInstrumentReviews } from '../../store/instrumentReview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const InstrumentReviews = ({instrumentId}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllInstrumentReviews(instrumentId))
    }, [instrumentId])

    return(
    <>
        <h1 className='aboutThisListing'> Product Reviews</h1>
        <h1 className = 'specs'> Product Reviews: For instrument ID {instrumentId} </h1>
    </>
    )
}

export default InstrumentReviews;