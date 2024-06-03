import './Orders.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { createReview } from '../../store/sellerReview'
import { useDispatch } from 'react-redux'



function Orders(){
    const dispatch=useDispatch();
    const orders = useSelector(state => Object.values(state.orders))
    const buyerSellerReviews = useSelector(state => Object.values(state.buyerSellerReviews)) 
    let reviewWrapperWrapper = document.getElementById('review-wrapper-wrapper')
    const [currentOrder,setCurrentOrder] = useState({});
    const currentUser = useSelector(state => state.session.user)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [firstNameSubmit, setFirstNameSubmit] = useState(currentUser.firstName.slice(0,1).toUpperCase()+currentUser.firstName.slice(1));
    const [lastNameInitial, setLastNameInitial] = useState(currentUser.lastName.slice(0,1).toUpperCase() + ".");
    const [reviewBody, setReviewBody] = useState("");
    const [errors, setErrors] = useState("")


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
                    <button className='review-button' id='create-review-button' onClick={()=>{
                      
                            setCurrentOrder(order)
                            openReviewForm()
                        
                    }}>Create Seller Review</button>
                )
            }
    }

    const openReviewForm = (order) => {
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

    const StarRating = () => {
        return (<>
            <div className='star-rating'>
                {[...Array(5)].map((star, index)=>{
                    index +=1
                    return(
                        <button type='button' 
                                key={index}     
                                className={index <= hover ? 'on' : 'off'} 
                                onClick={()=>setRating(index)}
                                onMouseEnter={()=>setHover(index)}
                        
                            >
                        <span className='star'>&#9733;</span>
                        </button>
                    )
                })
                }
            </div>
        
            
        </>)
    }

    const clickAway=(e)=>{
        if(e.target.id ==='review-wrapper-wrapper'){
            reviewWrapperWrapper = document.getElementById('review-wrapper-wrapper')
            reviewWrapperWrapper.style.display='none';
        }
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

    const fullName=()=>{
        if(currentOrder.sellerFirstName){
            return(currentOrder.sellerFirstName.slice(0,1).toUpperCase()+currentOrder.sellerFirstName.slice(1))
        }        
    }



   
        
      
    let firstName
    let lastName
    const orderSellerFullName = () => {
        if (currentOrder.sellerFirstName){
             firstName = currentOrder.sellerFirstName.slice(0,1).toUpperCase()+currentOrder.sellerFirstName.slice(1)
             lastName = currentOrder.sellerLastName.slice(0,1).toUpperCase() + currentOrder.sellerLastName.slice(1)
        }   else {
            firstName = 'Seller'
            lastName = ''
        }
    
        return firstName + " " + lastName
    }

    const submitSellerReview = e => {
        debugger;
        e.preventDefault;
     
        reviewWrapperWrapper.style.display = 'none'
        
        const seller_review={
            reviewerId: currentUser.id,
            sellerId: currentOrder.sellerId,
            title: currentOrder.itemName,
            body: reviewBody,
            stars: hover,
            firstName: firstNameSubmit,
            lastInit: lastNameInitial
        }
        debugger;

      dispatch(createReview(seller_review))
        
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
            <div id='second-wrapper'>
            <div id='create-review-wrapper' className='review-wrapper'>
                    <form id='create-review-form' className='review-form' onSubmit={submitSellerReview}>
                        <div>
                            <div className='review-inner-wrapper'>
                                <h1 className='review-form-header'>Create a Review For {fullName}</h1>
                                <div className='review-item-wrapper'>
                                    <img id='seller-review-photo' src = {`${currentOrder.photoUrl}`}/>
                                    <div className='review-info-words-wrapper'>
                                        <p className = 'item-purchased-review'>Item Purchased: {currentOrder.itemName}</p>
                                        <p>Seller: {orderSellerFullName()}</p>
                                     </div>
                              
                                </div>
                                
                               
                                
                                <p id='review-instructions'>Please give your review for the seller in the space below.  Include any relevant details about communication, promptness of delivery, accuracy of item description, or anything else that may be of use to other Renoun users.</p>
                                <textarea id='review-body' type='textarea' placeholder='Enter your review here!' onChange={e=>setReviewBody(e.target.value)}/>
                                <div id='names-wrapper'>
                                    <div className='name-wrapper'>
                                        <input className='name-input' type='text'></input>
                                        <label htmlFor='firstName' className='name-label-for-form' onChange={e=>setFirstNameSubmit(e.target.value)}>First Name</label>
                                    </div>    
                                    <div className='name-wrapper'>
                                        <input className='name-input' type='text'></input>

                                        <label htmlFor='lastName' className='name-label-for-form' onChange={e=>setLastNameInitial(e.target.value.slice(0,1))}>Last Name</label>
                                    </div>
                                </div>

                                <div id='star-rating-wrapper'>
                                    <p id='please-rate'>Please rate your transaction on a scale of 1-5</p>
                                        <div><StarRating /></div>
                                </div>
                                <div className='review-submit-button-wrapper'>
                                  <input className='review-submit-button' type='submit'/>
                              

                                </div>
                              
                       
                            </div>

                        </div>
                     
                           
                    </form>
              </div>
              <div id='update-review-wrapper' className='review-wrapper'>

              </div>

            </div>
             
              
       </div>

        </>
       
    )
}

export default Orders