import './CartItem.css'
import { useSelector } from 'react-redux'
import { IoMdHeart } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";


function CartItem(){

    const cart = useSelector(state => Object.values(state.carts))

    const instrument = useSelector(state => state.instruments[1])
    
    return(
        <>
            <div id='item-wrapper'>
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

                    <div className = 'pricing-wrapper'>
                        height: 200px;
                        width: 150px;
                        background-color: black;
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem