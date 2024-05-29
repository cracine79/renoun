import './Cart.css'
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
import { useSelector } from 'react-redux'

const emptyCart = document.getElementById('ec-wrapper-wrapper')



function Cart(){
    return(
        <>
            <div id='ec-wrapper-wrapper'>
                <div id='empty-cart-wrapper'>
                    <img id='empty-basket' src = '../../assets/images/empty-basket@2x-c13a691ddec1300ef6b06de9bd02471a99fae3ecaeaa181076b11ef2ceea078d.png' />
                    <p id='empty-text'> Your cart is empty.  Start browsing! </p>
                    
                </div>
                <div id='guitars-wrapper'>
                    <GuitarsCarousel />
                </div>
            </div>
        </>
    )
}

export default Cart