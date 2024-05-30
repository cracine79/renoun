import './Checkout.css'
import { formatter } from '../Carousel/GuitarsCarousel';
import { useSelector } from 'react-redux'
import { ImMusic } from "react-icons/im";
import { RiTreeLine } from "react-icons/ri";


function Checkout (){
    
    const userFirstName = useSelector(state => (state.session.user.firstName));
    const userLastName = useSelector(state => (state.session.user.lastName));
    const cart = useSelector(state=>Object.values(state.carts));

     const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });


    const instrumentsArray = cart.map((item)=>{
    
        const instrument = useSelector(state=>(state.instruments[item.instrumentId]))
  
        return instrument;
    })

    let subTotal = 0;
    let shipping = 0;
    instrumentsArray.forEach((instrument)=>{
        subTotal += instrument.price
        shipping += instrument.shipping
    })

    const getShipping=(instrument)=>{
        if (instrument.shipping === 0){
            return "FREE Shipping"
        } else {
            return `${instrument.shipping} Shipping`
        }
    }

    if (shipping===0){
        shipping = "FREE"
    }
    let grandTotal = 0


    const tax = subTotal * .07

    if (shipping==='free'){
        grandTotal = tax 
    } else {
        grandTotal = tax + subTotal 
    }
    // const thing = useSelector(state=>(state.instruments[1]))
    // console.log(thing)
    // console.log(cart[].id)
    console.log(instrumentsArray)

    return (
    <div id='c-wrapper-wrapper'>
        <div id='checkout-wrapper'>
            <div id='checkout-left'>
                <div id='address-box'>
                    <p id='shipping-address-head' className='checkout-head'>Shipping Address</p>
                    <hr className='shipping-line'></hr>
                   <div id='address-wrapper'>
                        {userFirstName.slice(0, 1).toUpperCase()}{userFirstName.slice(1)} {userLastName.slice(0,1).toUpperCase()}{userLastName.slice(1)}
                    <p>3218 1/2 Glendale Boulevard</p> 
                    <p>Brooklyn, NY 11234</p>
                    <p>UNITED STATES</p>
                   </div>

                </div>
                <div id='payment-box'>
                <p id='shipping-address-head' className='checkout-head'>Payment Method</p>
                <hr className='shipping-line'></hr>
                <div id='credit-header'>
                   <div id='checkout-button-holder'>
                   <input id='radio' type='radio' checked='true'/>
                    <label id='checkout-card'>Card</label>

                   </div>
                   <img id='cards' src='../../assets/images/footer-accolade-payment-cards.avif' />
        
                        
                </div>
                <div id='credit-card-box'>
                   <div id='credit-card-form'>
                        <div id='card-number-wrapper'>
                            <p className='credit-card-title'>
                                Card Number
                            </p>
                            < input id='number-text' type='text'  value='867 5309'/>
                        </div>
                        <div id='validations-wrapper'>
                            <div id='expiration-wrapper'>
                            <p className='credit-card-title'>
                                    Expiration
                                </p>
                                <input id='expiration-text' type='text' value='MM/YY'/>
                            </div>
                            <div id='security-code-wrapper'>
                                <p className='credit-card-title'>
                                Security Code
                                </p>
                                <input id='security-code-text' type='text' value='3 digits'/>
                            </div>

                        </div>
                       
                      <div id='checkbox-wrapper'>
                      <input type='checkbox' checked='true'/><span>Billing address is the same as shipping address</span>
                      
                      <hr id='credit-card-line' ></hr>   
                      <div id='bottom-address-wrapper'>
                                {userFirstName.slice(0, 1).toUpperCase()}{userFirstName.slice(1)} {userLastName.slice(0,1).toUpperCase()}{userLastName.slice(1)}
                                <p>3218 1/2 Glendale Boulevard</p> 
                                <p>Brooklyn, NY 11234</p>
                                <p>UNITED STATES</p>
                                 </div>

                      </div>
                       </div>

                </div>
                </div>
            </div>


            <div id='checkout-right'>
                <div id='checkout-items-box'>
                        <p id='order-summary-head' className='checkout-head'> Order Summary </p>
                        <hr className='shipping-line'></hr>
                        <div id='checkout-items-wrapper'>
                        {instrumentsArray.map((instrument)=>{
                            return(
                                <div key='instrument.id'id='checkout-single-wrapper'>
                                    <div className='checkout-items-left-box'>
                                        <img className='checkout-img' src={instrument.photoUrl} />
                                        <div className='checkout-words-wrapper'>
                                            <p className='checkout-title'>{instrument.itemName}</p>
                                            <p className='checkout-seller'>Sold By {instrument.sellerFirstName.slice(0,1).toUpperCase()}{instrument.sellerFirstName.slice(1)} <text> </text>
                                            {instrument.sellerLastName.slice(0,1).toUpperCase()}{instrument.sellerLastName.slice(1)}  </p>
                                            <p className='shipping-method'>Shipping Method</p>
                                            <p className='standard-shipping'>Standard Shipping</p>
                                        </div>
                         
                                    </div>
                                    <div className='checkout-price-wrapper'>
                                                <p className='checkout-price'>{formatter.format(instrument.price)}</p>

                                                <p className='shipping-price-checkout'>{getShipping(instrument)}</p>
                                    </div>
                                </div>
                            )
                        })}
                       </div>
                       <hr className='checkout-hr'></hr>
                       <div id='damage-box'>
                
                            <p id='damage-subtotal' className='damage-sub-box'><span className='damage-words'>Product Subtotal</span><span className='damage-numbers'>{formatter.format(subTotal)}</span></p>
                   
               
                            <p id='damage-shipping' className='damage-sub-box'><span className='damage-words'>Shipping</span><span className='damage-numbers'>{shipping}</span> </p>
              
                 
                            <p id='damage-tax' className='damage-sub-box'><span className='damage-words'>Estimated Tax</span><span className='damage-numbers'>{formatter.format(tax)}</span> </p>
                    
                        <hr className='checkout-hr'></hr>

                            <p id='damage-total' className='damage-sub-box'><span className='damage-words' id='total-words-damage'>Total</span><span className='damage-numbers' id='total-numbers-damage'>{formatter.format(grandTotal)}</span> </p>
                       
                     </div>
                        
                </div>

                
                <div id='place-order'>Place Order</div>
                <p id='haha' >By continuing, you agree to Renoun's pretend Terms and Privacy Policy</p>

                <div className='checkout-csr-wrapper'>
                    <div className='csr-icon'>
                    <div className='csr-circle'></div>
                        <div className='csr-icon-wrapper'>
                         <ImMusic />
                        </div>
                    </div>
                    <div className='csr-words-wrap'>
                        <p className='csr-title'>Reverb Gives</p>
                        <p className='csr-expl'>Your purchases help youth music programs get the gear they need to make music.</p>
                    </div>
                     

                </div>
                 <div className='checkout-csr-wrapper'>
                 <div className='csr-icon'>
                    <div className='csr-circle'></div>
                        <div id='csr-tree' className='csr-icon-wrapper'>
                        <RiTreeLine />
                        </div>
                    </div>
                    <div className='csr-words-wrap'>
                        <p className='csr-title'>Carbon-Offset Shipping</p>
                        <p className='csr-expl'>Your purchases also help protect forests, including trees traditionally used to make instruments.</p>
                    </div>

                    
                </div>
            </div>
           
        </div>
        
    </div>
    )
}

export default Checkout