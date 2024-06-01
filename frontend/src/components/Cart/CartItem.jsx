import './CartItem.css'
import { useSelector } from 'react-redux'
import { IoMdHeart } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { formatter } from '../Carousel/GuitarsCarousel';
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/cart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createFavorite } from '../../store/favorite';



function CartItem({cartItem}){
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const cart = useSelector(state => Object.values(state.carts))
    const instrumentState = useSelector(state => state.instruments)
    const currentUser = useSelector(state=>state.session.user)


    const instrument = useSelector(state => state.instruments[cartItem.instrumentId])

    
        const id = cartItem.id;
       
        
        const handleDelete= async () => {
            dispatch(removeCartItem(id));
            navigate('/cart', {replace:true})
        }


        const handleMoveToWatchlist = () => {
            dispatch(removeCartItem(id));
            const favorite = {
                instrumentId: instrument.id,
                favoriterId: currentUser.id
            }
             dispatch(createFavorite(favorite))

        }
        if (!instrument) return null;
            return ( 
             
                        

                    <div id='middle-wrapper'>
                            <div className='item-wrapper'>
                            
                                <img className = 'cart-pic' src={instrument.photoUrl} />
                                <div className='cart-item-details'>
                                    <p className='cart-item-name'>{instrument.itemName}</p>
                                    <p className='sold-by'> SOLD BY</p>
                                    <p className='cart-item-seller'>Seller ID: {instrument.sellerId}</p>
                                    <div className='cart-links'>
                                        <div className='move-to-watchlist'>
                                            <IoMdHeart />
                                            <p className='move-words' onClick={()=>handleMoveToWatchlist()}> Move to Watch List </p>
                                        </div>
                                        <div className='remove'>
                                            <div id='x-wrapper'>
                                                <RiCloseLine />
                                            </div>
                                            <p className='remove-words' onClick={()=>handleDelete()} id={`instrument_${instrument.id}`}>Remove</p>                                  
                                        </div>
                                    </div>        
                                </div>
                            </div>
                                <div className = 'pricing-wrapper'>
                                    <p className='cart-item-price'>{formatter.format(instrument.price)}</p>
                                    <p className='cart-item-shipping'>+ {formatter.format(instrument.shipping)} Shipping</p>
                                    <div className='cart-item-tax'> + applicable tax
                                        <div className='tax-explanation'>
                                            <p id='tax-words'>Tax may be applied during checkout</p>
                                        </div> 
                                    </div>
                                </div>
                        
                    </div>          
                   
                
           
            )
        
}

export default CartItem