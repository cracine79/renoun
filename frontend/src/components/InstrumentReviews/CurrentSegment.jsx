import InstrumentReviewText from "./InstrumentReviewText"
const CurrentSegment = ({currentSegment}) => {
    
    const instrumentStarRating = (num)=>{
        if(num<0.25){
            return (
                <div id='no-star-inst' className='stars-instrument-indiv'></div>
            )
        }else if(0.25<=num && num <1.5){
            return(
                <div id='one-star-inst' className='stars-instrument-indiv'></div>
            )
        }else if(1.5<=num && num<2.5){
            return(
                <div id='two-star-inst' className='stars-instrument-indiv'></div>
            )
       }else if(2.5 <= num && num < 3.5){
            return(
                <div id = 'three-stars-inst' className='stars-instrument-indiv'></div>
            )
        } else if (3.5 <= num && num < 4.5){
            return(
                <div id='four-stars-inst' className='stars-instrument-indiv'></div>
            )
        } else {
            return(
                <div id='five-stars-inst' className='stars-instrument-indiv'></div>
            )
        }
    }  

    const purchasedOnRenoun = (purchased) =>{
        if (purchased == true){
            return(
                <span id='yes-purchased'>
                    Purchased on Renoun
                </span>
            )
        }
    }
    
    return(
        <>
            HELLO
              {currentSegment.map((review)=>{
            return(
                <>
                    <div className='small-stars'>{instrumentStarRating(review.stars)}{purchasedOnRenoun(review.purchased_on_renoun)} </div>
                    <div className='instrument-review-title'>  {review.title}</div>
                    <div className='instrument-review-author'> {review.reviewer_name} </div>
                    <div className='instrument-review-body'> <InstrumentReviewText text = {review.body} id={review.id}/> </div>
                </>
            )
        }
        )

        }
        </>
  
      )
            
    }


export default CurrentSegment