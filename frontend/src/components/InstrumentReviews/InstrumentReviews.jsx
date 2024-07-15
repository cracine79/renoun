
import './instrumentReviews.css'

const InstrumentReviews = ({instrumentId}) => {
    
    return(
    <>
        <h1 className='aboutThisListing'> Product Reviews</h1>
        <h1 className = 'specs'> Product Reviews: For instrument ID {instrumentId} </h1>
    </>
    )
}

export default InstrumentReviews;