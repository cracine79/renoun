import './CartItem.css'
import { useSelector } from 'react-redux'
import { IoMdHeart } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { formatter } from '../Carousel/GuitarsCarousel';


function CartItem(){

    const cart = useSelector(state => Object.values(state.carts))

        const instruments = [];
        cart.forEach((cartItem)=>{
            const identifier = cartItem.instrumentId;
            const instrument = useSelector(state=>state.instruments[identifier])
            instruments.push(instrument)
        })
        
     
            return ( 
                <>
                <div id='cart-items-only-wrapper'>
                {instruments.map((instrument)=> { return (
                    <div id='help'>
                            <div className='item-wrapper'>
                              
                                <img className = 'cart-pic' src={instrument.photoUrl} />
                                <div className='cart-item-details'>
                                    <p className='cart-item-name'>{instrument.itemName}</p>
                                    <p className='sold-by'> SOLD BY</p>
                                    <p className='cart-item-seller'>Seller ID: {instrument.sellerId}</p>
                                    <div className='cart-links'>
                                        <div className='move-to-watchlist'>
                                            <IoMdHeart />
                                        <p className='move-words'> Move to Watch List </p>
                                        </div>
                                        <div className='remove'>
                                            <div id='x-wrapper'>
                                                <RiCloseLine />
                                            </div>
                                            <p className='remove-words'>Remove</p>
                                    
                                        </div>
                                    </div>        
                                </div>
                            </div>
                                <div className = 'pricing-wrapper'>
                                    <p className='cart-item-price'>{formatter.format(instrument.price)}</p>
                                    <p className='cart-item-shipping'>+ {formatter.format(instrument.shipping)} Shipping</p>
                                    <p className='cart-item-tax'> + applicable tax
                                    <div className='tax-explanation'>
                                        <p id='tax-words'>Tax may be applied during checkout</p>
                                    </div> </p>
                                    
                                </div>
                         
               </div>
               
            )})
           
            
            }
            </div>
                 </>)
        
}

export default CartItem