import './Cart.css'
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import CartItem from './CartItem';



function Cart(){
   
    
const cart = useSelector(state=>Object.values(state.carts))
let length = cart.length
  

    useEffect(()=>{
   
        const emptyCart = document.getElementById('empty-cart-wrapper')
        const fullCart =document.getElementById('full-cart-wrapper')
        if(cart.length===0){
            emptyCart.style.display='flex'
            fullCart.style.display='none'
        }else{
            emptyCart.style.display='none'
            fullCart.style.display='flex'
        }
    },[length])


    return(
        <>
            <div id='cart-wrapper-wrapper'>
                <div id='empty-cart-wrapper'>
                    <div id='empty-basket'></div>
                    <p id='empty-text'> Your cart is empty.  Start browsing! </p>    
                </div>
                <div id='full-cart-wrapper'>
                    <div id='top-line'>
                        <div id='how-many'>
                            <div id='cart-wrap'>
                                 <ImCart />
                            </div>
                            <p id='cart-head-count'>{`${length} Items in Your Cart`}</p>
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
                        <CartItem />
                        
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