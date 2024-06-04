import './OrderConfirmation.css'
import {useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function OrderConfirmation(){
   
    const location = useLocation();
    const orderState = location.state.instrumentIds;
    const instrumentState = useSelector(state => Object.values(state.instruments))

    const thisOrder = instrumentState.filter((instrument)=>{
       return( orderState.includes(instrument.id))
    })


    console.log(orderState);
    const userFirstName = useSelector(state => (state.session.user.firstName))
    const userLastName = useSelector(state=> (state.session.user.lastName))
    const email = useSelector(state=>(state.session.user.email))
    // const allOrders = useSelector(state=>Object.values(state.orders))
    //
    // let orders = []
    // useState(()=>{
    //     orders = allOrders.filter((order)=>{
    //         orderState.includes(order.instrumentId)
    //    })
    // },[allOrders])
    

    const capFirstName = userFirstName.slice(0,1).toUpperCase()+userFirstName.slice(1)
    const capLastName = userLastName.slice(0,1).toUpperCase()+userLastName.slice(1)
    const now = new Date();
    const date = now.toDateString();
    let sellerCapFirstName
    let sellerCapLastName
  
    const sellerFullName = (instrument) => {
        if(instrument.sellerFirstName){
             sellerCapFirstName = instrument.sellerFirstName.slice(0,1).toUpperCase()+instrument.sellerFirstName.slice(1)
            
        } else {
             sellerCapFirstName = 'Seller'
        }
        if(instrument.sellerLastName){
             sellerCapLastName = instrument.sellerLastName.slice(0,1).toUpperCase()+instrument.sellerLastName.slice(1)
        } else {
             sellerCapLastName = 'Temporarily Unavailable'
        }
        
        return (`${sellerCapFirstName} ${sellerCapLastName}`)
    }
    let extension = 0
    if (thisOrder.length>0){
    
        extension = thisOrder[0].id
    } else {
        extension = 79
    }

    let subTotal=0;
    let shippingTotal=0;
    let totalTotal=0;
    
    function isNumber(value) {
        return typeof value === 'number';
      }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    thisOrder.forEach((order)=>{
        subTotal += order.price
   
        if(isNumber(order.shipping)){
        shippingTotal += order.shipping
        }
        totalTotal = shippingTotal + subTotal
    })
    return(
     <div id='confirmation-outermost-wrapper'>
        <div id='confirmation-wrapper'>
            <div id='left-outer-wrapper'>
                <div id='confirmation-left-wrapper' className='confirmation-div-wrapper'>
                    <div id='left-inner-wrapper'>
                
                        <p id='thank-you-user'>Thank You For Your Purchase!</p>

                        <p id='hello-user'>Hello {capFirstName},</p>
                        <p id='congratulations-user'>Congratulations on your puchase! Your order summary and relevant details can be seen on the right.</p>
                        <p id='whats-next'>What's next?</p>
                        <p id='next-steps'>When the seller ships your order, we'll send you another email with tracking information</p>
                    </div>
                </div>
                <div id='billing-box-outer'>
                    <div id='billing-box'>
                        <p id='billing-address'>Billing Address</p>
                        <div className='billing-address-wrap'>
                            <p className = 'billing-title'>Name</p>
                            <p className = 'billing-value'>{capFirstName} {capLastName}</p>
                        </div>
                        <div className='billing-address-wrap'>
                            <p className = 'billing-title'>Address</p>
                            <div id='billing-address-wrap-wrap'>
                                <p className = 'billing-value'>3218 1/2 Glendale Blvd</p>
                                <p className = 'billing-value'>Brooklyn, NY 11234</p>
                            </div>
                        </div>
                        <div className='billing-address-wrap'>
                            <p className = 'billing-title'>Phone</p>
                            <p className = 'billing-value'>+1 (347) 489 4608</p>
                        </div>
                        <div className='billing-address-wrap'>
                            <p className = 'billing-title'>Email</p>
                            <p className = 'billing-value'>{email}</p>
                        </div>
                    </div>


                </div>
               

                    <Link to='/Orders' id='orders-button'>See All Past Orders</Link>

                
              
            </div>

            <div id='confirmation-right-wrapper' className='confirmation-div-wrapper'>
                <div id='right-inner-wrapper'>
                    <h1 id='order-summary-text'>Order Summary</h1>

                    <div id='order-header-summary-wrapper' className='order-info-summary-wrapper'>
                        <div id='order-date-wrapper'>
                            <p className='order-summary-text'>
                                Date
                            </p>
                            <p className='order-info-text'>{date}</p>
                        </div>
                        <div className = 'vert-line'>
                        </div>
                        <div id='order-number-summary-wrapper' className='order-info-summary-wrapper'>
                            <p className='order-summary-text'>
                                Order Number
                            </p>
                            <p className='order-info-text'>2024420-90210-{extension}</p>
                        </div>
                        <div className = 'vert-line'>
                        </div>
                        <div id='order-payment-wrapper' className='order-info-summary-wrapper'>
                            <p className='order-summary-text'>
                                Payment Method
                            </p>
                            <p className='order-info-text'>
                                Credit Card
                            </p>
                        </div>
                 
                    </div>
                    <div id='receipt-dotted-line'></div>

                    {thisOrder.map((instrument)=>{
                        return(
                            <>
                                <div className='receipt-summary-item-wrapper' id='instrument.id'>
                                   <div id='receipt-left-wrapper'>
                                        <img className='receipt-image' src={instrument.photoUrl} />
                                        <div className='receipt-words-details-wrapper'>
                                            <div className='receipt-name'>{instrument.itemName}</div>
                                            <div className='receipt-seller'> Sold By {sellerFullName(instrument)}</div>
                                        </div>

                                   </div>
                                   
                                    <div className = 'receipt-item-price'>
                                        {formatter.format(instrument.price)}
                                    </div>
                                </div>

                               
                                
                            </>
                        )
                    })}

                    <div className='next-line'></div>
                    <div id='receipt-subtotals-wrapper'>
                        <div className='subtotal-subwrapper'>
                            <p className='subtotal-title'>Sub Total</p>
                            <p className = 'subtotal-info-data'>{formatter.format(subTotal)}</p>
                        </div>
                        <div className='subtotal-subwrapper'>
                            <p className='subtotal-title'>Shipping</p>
                            <p className = 'subtotal-info-data'>{formatter.format(shippingTotal)}</p>
                        </div>
                        <div className='subtotal-subwrapper'>
                            <p className='subtotal-title'>Tax</p>
                            <p className = 'subtotal-info-data'>{formatter.format(subTotal * .085)}</p>
                        </div>
                        <hr className='next-line'></hr>
                        <div className='total-subwrapper'>
                            <p className='subtotal-title' >Order Total</p>
                            <p className = 'subtotal-info-data'>{formatter.format(totalTotal + subTotal * .085)}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </div>    
    </div>
    )

}

export default OrderConfirmation