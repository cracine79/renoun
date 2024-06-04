import './Seller.css'
import { fetchAllReviews } from '../../store/sellerReview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Seller({instrument, sellerStoreName}){
    const dispatch = useDispatch();

    const id = instrument.sellerId;
   
    const sellerFirstName = instrument.sellerFirstName
    const sellerLastName = instrument.sellerLastName
    const capFirstName = sellerFirstName.slice(0,1).toUpperCase()+sellerFirstName.slice(1)
    const capLastName = sellerLastName.slice(0,1).toUpperCase()+sellerLastName.slice(1)
    const fullName = capFirstName + " " + capLastName;
    const reviewsObj = useSelector(state => state.reviews)
    const reviews = Object.values(reviewsObj)
    reviews.reverse()
    const reviewsOne = reviews.slice(0,5)
    


    useEffect(()=>{
   
        dispatch(fetchAllReviews(id))
    }, [instrument])
    
 
        const abbrevName = (review)=>{
            
            if(review.firstName){
                return review.firstName.slice(0,1).toUpperCase()+review.firstName.slice(1)+ ' ' + review.lastInit.toUpperCase() + '.'
            } else {
                return ""
            }
           
        }
    


  
    let sum = 0
    reviews.forEach((review)=>{
   
        sum += review.stars
    })
    let average = sum/reviews.length


    const avgStars = (num)=>{

        if(num<0.5){
            return (
                <div id='no-star-avg' className='no-stars'></div>
                // <img className='stars' id='one-star-avg' src='/assets/images/noStars.png' />
            )
        }else if(0.5<=num && num <1.5){
            return(
                <div id='twoneo-star-avg' className='one-star'></div>
                // <img className='stars' id='two-star-avg' src='/assets/images/oneStar.png' />
            )
        } else if(1.5<=num && num <2.5){
            return(
                <div id='two-star-avg' className='two-stars'></div>
                // <img className='stars' src='/assets/images/twoStars.png' />
            )
        }else if(2.5<=num && num<3.5){
            return(
                <div id='three-star-avg' className='three-stars'></div>
                // <img className='stars' src='/assets/images/threeStars.png' />
            )
        }else if(3.5<=num && num<4.5){
            return(
                <div className='four-stars'></div>
                // <img className='stars' src='/assets/images/fourStars.png' />
            )
        }else if(num>=4.5){
            return(
                <div className='five-stars'></div>
                // <img className='stars' src='/assets/images/fiveStars.png' />
            )
    }
    }

    const stars = (num) =>{
        if(num===0){
            return (
                <div className='no-stars'></div>
                // <img className='stars' src='/assets/images/noStars.png' />
            )
        }else if(num===1){
            return(
                <div className='one-star'></div>
                // <img className='stars' src='/assets/images/oneStar.png' />
            )
        } else if(num===2){
            return(
                <div className='two-stars'></div>
                // <img className='stars' src='/assets/images/twoStars.png' />
            )
        }else if(num===3){
            return(
                <div className='three-stars'></div>
                // <img className='stars' src='/assets/images/threeStars.png' />
            )
        }else if(num===4){
            return(
                <div  className='four-stars'></div>
                // <img className='stars' src='/assets/images/fourStars.png' />
            )
        }else if(num===5){
            return(
                <div className='five-stars'></div>
            )
        }
        
    }

    const wordifyDate = (review) => {
      
        return new Date(review.createdAt).toDateString()
     }
    
    return(
        <>
        <div id='seller-wrapper'>
                <h1 className='aboutThisListing'>About the Seller</h1>
                <div id='seller-dets'>
                    <div id='shop-wrap'>
                        <div id='shop-image-left'></div>
                    </div>
                    <h2 id='seller-info'>
                        {sellerStoreName}
                    </h2>
            
                </div>
                <hr className='sellerLine' />
                <div className='reviews-header'>
                    Seller Reviews {avgStars(average)} ({reviews.length})
                </div>
                {reviewsOne.map((review)=>{
                    return(
                        <>
                            <hr className='review-divider'></hr>
                            <div class-name='avg-stars-img'> {stars(review.stars)}</div>
                            <h1 className='review-title'>
                            {review.title}
                            
                            </h1>
                            <div className='author-date'>
                                <p className='review-author'>
                                {abbrevName(review)}
                                </p>
                                <p className='review-date-created'>
                                   -  {wordifyDate(review)}
                                </p>
                            </div>
                        
                            <p className='review-body'>
                                {review.body}
                            </p>
                             
                        </>
                    
                    )
                })}

                
        </div>
        </>
    )
}

export default Seller;