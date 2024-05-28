import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Instrument.css'
import { LuHeart } from "react-icons/lu"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Seller from '../Seller/seller';
import InstrumentReviews from '../InstrumentReviews/InstrumentReviews';
import { useDispatch } from "react-redux";
import { createCartItem } from "../../store/cart";
import { useState } from "react";


const Instrument = () => {

    
    const { id } = useParams();
    const instrument = useSelector(state=>(state.instruments[id]))
    const sellerId = instrument.sellerId
    const currentUser = useSelector(state=>(state.session.user))
    const dispatch = useDispatch();
    const modal= document.getElementById('wrapper-wrapper');
    const loginNav = document.getElementById('log-in-nav');
    const signupNav = document.getElementById('sign-up-nav')
    const loginForm = document.getElementById('login-form-wrapper')
    const signupForm = document.getElementById('signup-form-wrapper')
    const signupSquare = document.getElementById('signup-mnw')
    const loginSquare = document.getElementById('login-mnw')
    const [errors, setErrors] = useState();
    

    let conditionExplanation = ''
    let conditionSpec = ''
    const date1 = new Date();
      const date2 = new Date(instrument.createdAt);
      const diffTime = date2.getTime() - date1.getTime(); 
      const diffDays = Math.floor(Math.abs(diffTime / (1000 * 3600 * 24)));
      const diffHours = Math.floor(Math.abs(diffTime / (1000 * 3600)))

    useEffect(()=>{
        const recently = document.getElementById('recent-wrapper');
        if(diffDays<7){
          recently.style.display='flex';
        } else {
          recently.style.display='none';
        }
    },[diffDays])

    if(instrument.condition==='Brand New'){
        conditionExplanation = 'Brand New items are sold by an authorized dealer or original builder and include all original packaging.',
        conditionSpec = 'Brand New'
    } else if (instrument.condition==='Used - Mint'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.';
        conditionSpec = 'Mint (Used)'
    }else if (instrument.condition === 'Used - Excellent'){
        conditionExplanation = 'Excellent items are almost entirely free from blemishes and other visual defects and have been played or used with the utmost care.';
        conditionSpec = 'Excellent (Used)'
    }else if (instrument.condition === 'Used - Good'){
        conditionExplanation = 'Good condition items function properly but may exhibit some wear and tear.'
        conditionSpec = 'Good (Used)'
    }else if (instrument.condition === 'Used - Poor'){
        conditionExplanation = 'Poor condition gear may not work properly but can still perform most functions.'
        conditionSpec = 'Poor (Used)'
    }else{
        conditionExplanation = 'Oops!  The condition for this instrument is unavailable!'
    }



    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    let shipping = ''
    if (instrument.shipping === 0){
    shipping = "+ FREE Shipping"
    } else {
    shipping = `+ $${instrument.shipping} Shipping`
    }

    const low = Math.floor(instrument.price/11);
    
    const handleAddToCart = async (e) => {
        e.preventDefault();

        if (currentUser){
            const cart = {
                instrument_id: id,
                buyer_id: currentUser.id
            }
            
            try { 
                await dispatch(createCartItem(cart));
                // Navigate('/cart')
            } catch (res){
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
    
                if (data?.errors) {
                    setErrors(data.errors);
                } else if (data) {
                    setErrors([data]);
                } else {
                    setErrors([res.statusText]);
                }
                console.log(errors)

            }
        
        } else {
            modal.style.display='flex'
            modal.className='login'
            loginNav.className='active'
            signupNav.className='inactive'
            loginForm.style.display='flex'
            signupForm.style.display='none'
         
            loginSquare.className='active-menu-nav-wrapper'
            signupSquare.className='passive-menu-nav-wrapper'
        }


    }

    let listedExpl = ''
    let specListedExpl = ''

    if (diffDays<1){
    listedExpl = `Listed within the past ${diffHours} hours`;
    specListedExpl = `${diffHours} hours ago`
    } else {
    listedExpl = 'Listed within the past 7 days'
    specListedExpl = `${diffDays} days ago`
    }  
    
    window.onscroll = function(){
        const rightBox = document.getElementById('instrumentInfoBox');
        if (window.pageYOffset > 100){
            rightBox.className='withShadow'
        } else {
            rightBox.className='noShadow'
        }
    }
      


   

    return(
        <>
       
        <div id='page-wrapper'>
            <div id='left'>
                <div id='linkbox'>
                    <Link className='instInfoLink' to='/'>Home</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.category}</Link>
                     <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.brand}</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.model}</Link>
                </div>

                <div id='photobox'>
                    <img id= 'photo' src={instrument.photoUrl} />
                    <div className='like' id='biglike'>
                             <LuHeart /> 
                     </div>
                </div>

                <h1 className='aboutThisListing'> About This Listing</h1>

                <p className='description'>{instrument.description}</p>

                <div id = 'buyerProtectionBox'>
                    <div id = 'blueSkinny'>
                        
                    </div>
                    <div id= 'bpText'>
                        <p className='specKey'>Reverb Buyer Protection</p>
                        <p className='gotYourBack'>Reverb has your back if your item is lost, damaged, or does not match its description. Simply report any issues within 7 days and we will help you get a full refund.</p>
                    </div>
                </div>



                <h2 className='specs'>Product Specs</h2>

                <div id='listed-wrapper' className='spec-wrapper'>
                    <p className = 'specKey'> Listed</p>
                    <p className = 'spekValue'> {specListedExpl}</p>
                </div>
                <div id='condition-wrapper' className='spec-wrapper'>
                    <p className = 'specKey'>Condition</p>
                    <div id='condition-expl-wrapper'>    
                        <p className = 'spekValue'>{conditionSpec}</p>
                        <p id='condition-spec-expl'>{conditionExplanation}</p>
                    </div>

                </div>
                <div id='brand-wrapper' className='spec-wrapper'>
                    <p className = 'specKey'>Brand</p>
                    <p className = 'spekValue'>{instrument.brand}</p>
                </div>
                <div id='model-wrapper' className='spec-wrapper'>
                 <p className = 'specKey'>Model</p>
                    <p className = 'spekValue'>{instrument.model}</p>
                </div>
                
                <div id='blue-info-box'>
                    <div className='blue-sub-box'>
                        <img className='blueIcon' src='../../assets/images/trust_shield_icon.svg' />
                        <div className='subSubBox'>
                            <p className='specKey'>Reverb Protection</p>
                            <p className='reverb-reassure'>Simple Returns, Secure Transactions, Human Support</p>
                        </div>

                    </div>
                    <div className='blue-sub-box'>
                        <img className='blueIcon' src='../../assets/images/padlock-icon.svg' />
                        <div className='subSubBox'>
                            <p className='specKey'>Secure Checkout</p>
                            <p className='reverb-reassure'>Simple Returns, Secure Transactions, Human Support</p>
                        </div>

                    </div>
                </div>

                <div id='seller-box'>
                    <Seller instrument = {instrument} />
                </div>

                <div id='instrument-reviews-box'>
                    <InstrumentReviews />
                 
                </div>
         
            </div>

            <div id='right'>
                <div id='instrumentInfoBox'>
                    <h1 id='title'>{instrument.itemName}</h1>
                    
                    <div id='condition-box'>
                        <div id='condition'>{instrument.condition}</div>
                        <div id='condition-explanation-box'>
                            <p id='condition-explanation'>
                                {conditionExplanation}
                            </p>      
                        </div>
                    </div>
                    <p id='inst-page-price'>{formatter.format(instrument.price)}</p>
                    <p id='shipping'>{shipping}</p>
                  
                    <p id='affirm'>As low as <span id='low'>${low}</span>/mo with <div id='blucirc'></div><span id='affirm-text'>affirm</span>  </p>

                    <p>{instrument.created_at}</p>
                    <div id='recent-wrapper'>
                        <img src='../../assets/images/sparkles.svg'  id='sparkle'/>
                        <span id='recently-listed'>  Recently Listed
                        <div id='listed-explanation'>{listedExpl}</div>
                        </span>
                    </div>

                    <button id='buyItNow'>
                        Buy It Now
                    </button>
                    <div id='button-holder'>
                        <button className='otherButton' id='add-to-cart' onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <div className='otherButton'>
                            Make an Offer
                        </div>
                    </div>
                    <div id = 'watch-button'>
                        <LuHeart /> Watch
                    </div>

                    <p id='product-background-info'>
                        <div>
                            <span className='key'>
                                Listed: 
                            </span>
                            <span className='value'>
                                 {specListedExpl}
                            </span>
                        </div>

                        <div>
                            <span className='key'>
                                Watchers: 
                            </span>
                            <span className='value'>
                                0 
                            </span>
                        </div>
                    </p>

                    <hr id = 'button-bottom' />

                    <div>Seller ID: {sellerId}</div>


                    



                </div>

               
            </div>
            <div id='sell-yours-top'></div>
            <div id='sell-yours-text'> 
                <div id='sell-text-wrapper'>
                    <h1 id ='sell-title' >Want to Sell Yours?</h1>
                    <p className = 'sellBody' >Anyone can sell on Reverb. List your Fender Player Telecaster today to get in front of thousands of eyse, quickly and easily.</p>
                </div>
            </div>
            <div id='sell-yours'>
               
            </div>
      
        </div>
        </>
    )
}

export default Instrument;