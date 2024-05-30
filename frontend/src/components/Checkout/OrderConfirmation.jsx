import './OrderConfirmation.css'
import {useSelector} from 'react-redux'


function OrderConfirmation(){

    const userFirstName = useSelector(state => (state.session.user.firstName))
    const orders = useSelector(state=>Object.values(state.orders))
    const capFirstName = userFirstName.slice(0,1).toUpperCase()+userFirstName.slice(1)
    const now = new Date();
    const date = now.toDateString();
    const sellerFullName = (instrument) => {
        debugger;
        const sellerCapFirstName = instrument.sellerFirstName.slice(0,1).toUpperCase()+instrument.sellerFirstName.slice(1)
        const sellerCapLastName = instrument.sellerLastName.slice(0,1).toUpperCase()+instrument.sellerLastName.slice(1)
        return (`${sellerCapFirstName} ${sellerCapLastName}`)
    }

    let subTotal=0;
    let shippingTotal=0;
    let totalTotal=0;


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

    orders.forEach((order)=>{
        subTotal += order.price
        debugger;
        if(order.shipping!=='FREE'){
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
                <button id='orders-button'>See All Past Orders</button>
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
                            <p className='order-info-text'>2024420-90210-{orders[0].id}</p>
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

                    {orders.map((instrument)=>{
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
                            <p className = 'subtotal-info-data'>{formatter.format(totalTotal)}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </div>    
    </div>
    )

}

export default OrderConfirmation