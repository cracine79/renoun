import './Orders.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



function Orders(){

    const orders = useSelector(state => Object.values(state.orders))
    const buyerSellerReviews = useSelector(state => Object.values(state.buyerSellerReviews)) 
    const reviewWrapperWrapper = document.getElementById('review-wrapper-wrapper')
    
    const orderButton = (order)=>{
        let reviewed = false
        buyerSellerReviews.forEach((review)=>{
            if(review.title.slice(0,20)===order.itemName.slice(0,20)){
                reviewed = true
            }
        })
            if (reviewed===true){
                return(
                    <button className='review-button' id='update-review-button' >Update Seller Review</button>
                )
            } else {
                return(
                    <button className='review-button' id='create-review-button' onClick={openReviewForm}>Create Seller Review</button>
                )
            }
    }

    const openReviewForm = () => {
        debugger;
        reviewWrapperWrapper.style.display='flex'
        console.log('hi')
    }

  

    const wordifyDate = (order) => {
      
       return new Date(order.createdAt).toDateString()
    }
    
    let status;
    var deliverDate = (order) => {
     return(new Date(new Date(order.createdAt).getTime()+(1000*60*60*10*24)).toDateString()
    )   
    }
    
    let orderStatus = (order) => {
        const timeAgo = (new Date()-new Date(order.createdAt))/(1000*60*60*24)

        if (timeAgo < 10){
            return `Expected delivery date: ${deliverDate(order)}`
        } else {
           return "Delivered"
        }
        
    }
    
    useEffect(()=>{
        const emptyBasketWrapper = document.getElementById('no-purchases')
        const fullBasketWrapper = document.getElementById('some-purchases')
        if (emptyBasketWrapper){
            if (orders.length === 0){
                emptyBasketWrapper.style.display = 'flex';
                fullBasketWrapper.style.display='none'
            } else {
                emptyBasketWrapper.style.display='none';
                fullBasketWrapper.style.display='block';
            }
        }
    }, [orders])

    const clickAway=()=>{
        reviewWrapperWrapper.style.display='none';
    }
 


    let ordersMessage

    if (orders.length === 1){
        ordersMessage = '1 Purchase'
    } else {
        ordersMessage = `${orders.length} Purchases`
    }

    const shortenName=(name)=>{
        if(name.length>24){
            return (name.slice(0,25)+"...")
        } else {
            return name
        }
    }
   
    return(

        <>
        <div id='orders-outer-wrapper'>
            <div id='orders-wrapper'>
                <div className='divider-liner'>
                </div>
                <p id='purchase-count'>
                    {ordersMessage}
                </p>
                <div className='divider-liner'>
                </div>

                <div id='purchase-history-box'>
                    <div id='no-purchases'>
                        <img id='empty-basko' src="../../assets/images/empty-basket@2x-c13a691ddec1300ef6b06de9bd02471a99fae3ecaeaa181076b11ef2ceea078d.png" />
                        <p id='no-purchases-text'>You have not made any purchases from Renoun.</p>
                    </div>
                    <div id='some-purchases'>
                        <p id='p-history'>Purchase History</p>
                        <div className='inner-divider-liner'>
                        </div>
                        <div id='purchase-headers-box'>
                            <div className='purchase-header'>Item Name</div>
                            <div className='purchase-header' >Item ID</div>
                            <div className='purchase-header' id='date-of-purchase'>Purchase Date</div>
                            <div className='purchase-header' id='order-status-header'>Status</div>
                        </div>
                        <div className='inner-divider-liner'>
                        </div>
                        {orders.map((order)=>{
                            return(
                            
                                <div className='order-history-item-info-wrapper'>
                                    <p className='order-history-item-name'>{shortenName(order.itemName)}</p>
                                    <p className='order-history-item-name'>2024420-90210-{order.id}</p>
                                    <p className='order-history-item-name'>{wordifyDate(order)}</p>
                                    <p className='order-history-item-name'>{orderStatus(order)}</p>
                                    <div>{orderButton(order)}</div>
                                </div>   
                            )      
                        })}
                    </div>
                </div>
            </div>
       </div>
       <div id='review-wrapper-wrapper' onClick={clickAway}>
              <div id='create-review-wrapper' className='review-wrapper'>
                    <form id='create-review-form' className='review-form'>
                            <h1>Create a Review For </h1>
                    </form>
              </div>
              <div id='update-review-wrapper' className='review-wrapper'>

              </div>
       </div>

        </>
       
    )
}

export default Orders