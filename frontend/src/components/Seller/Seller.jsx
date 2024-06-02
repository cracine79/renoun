import './Seller.css'
import { fetchAllReviews } from '../../store/sellerReview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Seller({instrument, sellerStoreName}){
    const dispatch = useDispatch();
    const id = instrument.sellerId;
   
    const sellerFirstName = instrument.sellerFirstName
    const sellerLastName = instrument.sellerLastName
    const capFirstName = sellerFirstName.slice(0,1).toUpperCase()+sellerFirstName.slice(1)
    const capLastName = sellerLastName.slice(0,1).toUpperCase()+sellerLastName.slice(1)
    const fullName = capFirstName + " " + capLastName;


    useEffect(()=>{
        dispatch(fetchAllReviews(id))
    }, [instrument.sellerId])
        
  
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

                <h1 className = 'specs'> Seller Reviews: COMING SOON! </h1>
        </div>
        </>
    )
}

export default Seller;