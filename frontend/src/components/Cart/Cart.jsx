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



function Cart(){
   
    const cart = useSelector(state => Object.values(state.carts));
    const instrumentsState = useSelector(state => state.instruments);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [itemNumbers, setItemNumbers] = useState(0)


    useEffect(()=>{
        debugger;
    if (cart.length === 0){
        setIsCartEmpty(true)
    } else {
        setIsCartEmpty(false)
    }
    debugger;
    },[cart.length]
    )


    // useEffect(() => {

        

    //     if(cart.length===0){
    //         setIsCartEmpty(true)
    //         setItemNumbers(0)
    //     } else {
    //         setIsCartEmpty(false)
    //         setItemNumbers(cart.length)
    //     }

    //     const newTotalAmount = cart.reduce((total, cartItem) => {
    //         if(cartItem){
    //             const instrument = instrumentsState[cartItem.instrumentId];
    //             if (instrument) {
    //                 total += instrument.price + instrument.shipping;
    //             }
    //         }
    //         return total;
    //     }, 0);

    //     setTotalAmount(newTotalAmount);
    // }, [cart, instrumentsState, CartItem]);

    return(
        <>
            <div id='cart-wrapper-wrapper'>
                <div id='empty-cart-wrapper' style={{ display: isCartEmpty ? 'flex' : 'none' }}>
                    <div id='empty-basket'></div>
                    <p id='empty-text'> Your cart is empty.  Start browsing! </p>    
                </div>
                <div id='full-cart-wrapper' style={{ display: isCartEmpty ? 'none' : 'flex' }}>
                    <div id='top-line'>
                        <div id='how-many'>
                            <div id='cart-wrap'>
                                 <ImCart />
                            </div>
                            <p id='cart-head-count'>{`${itemNumbers} Items in Your Cart`}</p>
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
                            <CartItem key={cartItem.id} cartItem={cartItem} /> :
                            <></>
                        ))}
                          <div id='price-box-wrapper'>
                                <p id='total'>Item + Shipping Subtotal <span className='dollars'>{formatter.format(totalAmount)}</span></p>
                                <p id='affirm-total'> As low as <span id='monthly-price'>{`${formatter.format(totalAmount / 24)}/month`}</span> with<span id='affirm-name'> affirm</span></p>
                                <button id='proceed-to-checkout'> <span id='proceed-words'>Proceed to Checkout </span>   <div id='arrow-wrapper'> <FaArrowRight /></div></button>
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