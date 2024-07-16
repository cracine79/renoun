
import './instrumentReviews.css'
import { fetchAllInstrumentReviews } from '../../store/instrumentReview';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InstrumentReviewText from './InstrumentReviewText';

const InstrumentReviews = ({instrumentId}) => {
    const dispatch = useDispatch();
    const instrumentReviewsObj = useSelector(state => state.instrumentReviews)
    const instrumentReviews = Object.values(instrumentReviewsObj)
    instrumentReviews.reverse()
    const [reviewPage, setReviewPage] = useState(0)
    let sum = 0
    let stars_count = {}

    useEffect(()=>{
        dispatch(fetchAllInstrumentReviews(instrumentId))
    }, [instrumentId])
    
    instrumentReviews.forEach((review)=> {
        sum += review.stars
        if(stars_count[review.stars]){
            stars_count[review.stars] +=1
        } else {
            stars_count[review.stars] = 1
        }
    })
    const numReviews = instrumentReviews.length
    let average = +sum/numReviews

    let req_pages = 0
    let reviewsPerPage = 5

    req_pages = Math.trunc(instrumentReviews.length/reviewsPerPage) + 1  //Determine total number of review pages needed based upon total avail
    const pageSegments = []
    for(let i = 0; i<req_pages; i++){
        const start = reviewsPerPage * i
        pageSegments.push(instrumentReviews.slice(start, start+reviewsPerPage))
    }
    const currentSegment = pageSegments[reviewPage]


    const averageStars = (num)=>{
        if(num<0.25){
            return (
                <div id='no-star-inst' className='stars-instrument'></div>
            )
        }else if(0.25<=num && num <1.25){
            return(
                <div id='one-star-inst' className='stars-instrument'></div>
            )
        } else if(1.25<=num && num <1.75){
            return(
                <div id='one-half-star-inst' className='stars-instrument'></div>
            )
        }else if(1.75<=num && num<2.25){
            return(
                <div id='two-star-inst' className='stars-instrument'></div>
            )
        }else if(2.25<=num && num<2.75){
            return(
                <div id='two-half-stars-inst' className='stars-instrument'></div>
            )
        }else if(2.75 <= num && num < 3.25){
            return(
                <div id = 'three-stars-inst' className='stars-instrument'></div>
            )
        }else if (3.25<=num && num < 3.75){
            return(
                <div id='three-half-stars-inst' className='stars-instrument'></div>
            )
        } else if (3.75 <= num && num < 4.25){
            return(
                <div id='four-stars-inst' className='stars-instrument'></div>
            )
        } else if (4.25 <= num && num < 4.75){
            return(
                <div id='four-half-stars-inst' className='stars-instrument'></div>
            )
        } else {
            return(
                <div id='five-stars-inst' className='stars-instrument'></div>
            )
        }
    }



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

    const getStars = num => {
       if(stars_count[num]){
        return stars_count[num]
       }else{
        return 0
       }
    }
    const getBars = num => {
        if(num == 1){
            return (
                <div id='hundred-percent' className='bar-rating'></div>
            )
        }else if(num >= 0.9){
            return(
                <div id='ninety-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.8){
            return(
                <div id='eighty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.7){
            return(
                <div id='seventy-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.6){
            return(
                <div id='sixty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.5){
            return(
                <div id='fifty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.4){
            return(
                <div id='forty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.3){
            return(
                <div id='thirty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.2){
            return(
                <div id='twenty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.1){
            return(
                <div id='ten-percent' className='bar-rating'></div>
            )
        } else {
            return(
                <div id='zero-percent' className='bar-rating'></div>
            )
        }
    }




    return(
    <>
        <div id='product-reviews-wrapper'>
            <div className = 'product-reviews-header'>Product Reviews</div>
            <div id='score-data-header'>
                <div id='instrument-score'>
                    <div id = 'score-header' className = 'product-reviews-header'>{average.toFixed(1)}   {averageStars(5)} </div>
                    <div id= 'average-summary'> {average.toFixed(1)} out of 5 based on {numReviews} reviews </div>
                    <div id='write-product-review-button'>Write a Product Review</div>
                </div>
                <div id='star-breakdown'>
                    <div className='star-line'> 5 stars {getBars(stars_count[5]/numReviews)}   {getStars(5)} reviews</div>
                    <div className='star-line'> 4 stars {getBars(stars_count[4]/numReviews)}   {getStars(4)} reviews</div>
                    <div className='star-line'> 3 stars {getBars(stars_count[3]/numReviews)}  {getStars(3)} reviews</div>
                    <div className='star-line'> 2 stars {getBars(stars_count[2]/numReviews)}  {getStars(2)} reviews</div>
                    <div className='star-line'> 1 stars {getBars(stars_count[1]/numReviews)}  {getStars(1)} reviews</div>
                </div>
            </div>
            <div id = 'actual-review-wrapper'>
                {currentSegment.map((review)=>{
                    return(
                        <>
                            <div className='small-stars'>{instrumentStarRating(average.toFixed(1))}</div>
                            <div className='instrument-review-title'>  {review.title}</div>
                            <div className='instrument-review-author'> {review.reviewer_name} </div>
                            <div className='instrument-review-body'> <InstrumentReviewText text = {review.body} id={review.id}/> </div>
                        </>
                    )
                }
                )}
            </div>
           
        </div>
            </>
    )
}

export default InstrumentReviews;