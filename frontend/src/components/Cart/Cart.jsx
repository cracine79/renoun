import './Cart.css'
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import CartItem from './CartItem';
import { formatter } from '../Carousel/GuitarsCarousel';
import { useState } from 'react';
import { fetchUserCart } from '../../store/cart';
import { useDispatch } from 'react-redux';



function Cart(){
   
    const cartObj = useSelector(state => state.carts);
    const cart = Object.values(cartObj);
    const currentUser = useSelector(state=>state.session.user);
    if (currentUser){
        const currentUserId = currentUser.id
    }

    const instrumentsState = useSelector(state => state.instruments);

    const [totalAmount, setTotalAmount] = useState(0);
    const [itemNumbers, setItemNumbers] = useState(0);
    const dispatch = useDispatch();
      let total
   
    useEffect(()=>{
        const music = instrumentsState;
        total = 0;
        cart.forEach((item)=>{

            if(item){
         
                total += (music[item.instrumentId].price)
     
                total += (music[item.instrumentId].shipping)

            }
           
        })
    },[cart])
       

    
    useEffect(()=>{
      
        const emptyCartWrapper = document.getElementById('empty-cart-wrapper')
        const fullCartWrapper = document.getElementById('full-cart-wrapper')
        const insideItems = document.getElementById('cart-items-wrapper')
    
    if (cart.length === 0){
        emptyCartWrapper.style.display='flex'
        fullCartWrapper.style.display='none'
        setItemNumbers(0);
    
    } else {
        emptyCartWrapper.style.display='none'
        fullCartWrapper.style.display='flex'
        setItemNumbers(cart.length)
        dispatch(fetchUserCart(currentUser.id))
        const instrumentsArray = [];
        setTotalAmount(total)
    }
    
    },[cart.length]
    )


    let message = '';
    if (itemNumbers === 1) {
        message = '1 Item in Your Cart'
    } else {
        message = `${itemNumbers} Items in Your Cart`
    }

    return(
        <>
            <div id='cart-wrapper-wrapper'>
                <div id='empty-cart-wrapper' >
                    <div id='empty-basket'></div>
                    <p id='empty-text'> Your cart is empty.  Start browsing! </p>    
                </div>
                <div id='full-cart-wrapper' >
                    <div id='top-line'>
                        <div id='how-many'>
                            <div id='cart-wrap'>
                                 <ImCart />
                            </div>
                            <p id='cart-head-count'>{message}</p>
                        </div>
                        <Link id='keep-shopping' to='/'>
                            <p id='ks-words'>Keep Shopping</p>  
                            <div id='arrow-wrap'>
                             <FaArrowRight />
                            </div> 
                        </Link>
                    </div>

                    <div id='line'></div>
                    <p id='dollars'>Items listed in $ USD </p>
                    <div id='cart-items-wrapper'>
                        {cart.map(cartItem => ( cartItem ? 
                            <CartItem key={cartItem.id} cartItem={cartItem} /> : null
                            
                        ))}
                          <div id='price-box-wrapper'>
                                <p id='total'>Item + Shipping Subtotal <span className='dollars'>{formatter.format(totalAmount)}</span></p>
                                <p id='affirm-total'> As low as <span id='monthly-price'>{`${formatter.format(totalAmount / 24)}/month`}</span> with<span id='affirm-name'> affirm</span></p>
                           <Link to='/checkout' id='proceed-to-checkout'> <span id='proceed-words'>Proceed to Checkout </span>   <div id='arrow-wrapper'> <FaArrowRight /></div></Link>
                         </div>
                    </div>

                </div>
           
            </div>
            <div id='guitars-wrapper'>
                    <GuitarsCarousel />
            </div>
        </>
    )
}

export default Cart