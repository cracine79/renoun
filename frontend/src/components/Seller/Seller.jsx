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
    const reviewsOne = reviews.slice(0,5)


    useEffect(()=>{
        dispatch(fetchAllReviews(id))
    }, [instrument.sellerId])
        
    const abbrevName = (review)=>{
        
        return review.firstName.slice(0,1).toUpperCase()+review.firstName.slice(1)+ ' ' + review.lastInit 
    }

    const stars = (num) =>{
        if(num===0){
            return (
                <img className='stars' src='../../assets/images/noStars.png' />
            )
        }else if(num===1){
            return(
                <img className='stars' src='../../assets/images/oneStar.png' />
            )
        } else if(num===2){
            return(
                <img className='stars' src='../../assets/images/twoStars.png' />
            )
        }else if(num===3){
            return(
                <img className='stars' src='../../assets/images/threeStars.png' />
            )
        }else if(num===4){
            return(
                <img className='stars' src='../../assets/images/fourStars.png' />
            )
        }else if(num===5){
            return(
                <img className='stars' src='../../assets/images/fiveStars.png' />
            )
        }
        
    }
  
    return(
        <>
        <div id='seller-wrapper'>
                <h1 className='aboutThisListing'>About the Seller</h1>
                <div id='seller-dets'>
                    <div id='shop-wrap'>
                        <img id='shop' src='../../assets/images/my-shop-orange-892ef04585ac0da6.svg' />
                    </div>
                    <h2 id='seller-info'>
                        {sellerStoreName}
                    </h2>
            
                </div>
                <hr className='sellerLine' />

                {reviewsOne.map((review)=>{
                    return(
                        <>
                            <h1> {stars(review.stars)}</h1>
                            <h1>
                            {review.title}
                            
                            </h1>
                            <p>
                            {abbrevName(review)}
                            </p>
                            <p>
                                {review.createdAt}
                            </p>
                            <p>
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