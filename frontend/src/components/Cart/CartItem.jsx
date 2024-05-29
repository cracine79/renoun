import './CartItem.css'
import { useSelector } from 'react-redux'
import { IoMdHeart } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { formatter } from '../Carousel/GuitarsCarousel';
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/cart';
import { useNavigate } from 'react-router-dom';


function CartItem(){
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const cart = useSelector(state => Object.values(state.carts))
    const instrumentState = useSelector(state => state.instruments)
    // const [instruments, setInstruments] = useState([])
    // const [itemsTotal, setItemsTotal] = useState([])
   const instruments = [];
   let itemsTotal=0;
    
        cart.forEach((cartItem)=>{
            debugger;
            if(cartItem){
                const identifier = cartItem.instrumentId;
                const instrument = instrumentState[identifier]
                if (instrument){
                    instruments.push(instrument)
                    instruments[instruments.length-1].cartItemId = cartItem.id
                }
            }
        });

   

  

        instruments.forEach((instrument)=>{
            itemsTotal += instrument.price;
            itemsTotal += instrument.shipping;
        })

        const handleDelete= async (id) => {
            debugger;
            await dispatch(removeCartItem(id));

            navigate('/cart')
        }
        
     
            return ( 
                <>
                <div id='cart-items-only-wrapper'>
                {instruments.map((instrument)=> { return (
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
                                        <p className='move-words'> Move to Watch List </p>
                                        </div>
                                        <div className='remove'>
                                            <div id='x-wrapper'>
                                                <RiCloseLine />
                                            </div>
                                            <p className='remove-words' onClick={()=>handleDelete(instrument.cartItemId)} id={`instrument_${instrument.id}`}>Remove</p>
                                    
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
                                    </div> </div>
                                  
                                    
                                </div>
                         
               </div>
               
            )})
           
            
            }

            <div id='price-box-wrapper'>
             <p id='total'>Item + Shipping Subtotal <span className='dollars'>{formatter.format(itemsTotal)}</span></p>
             <p id='affirm-total'> As low as <span id='monthly-price'>{formatter.format(itemsTotal/24)}/month</span> with<span id='affirm-name'> affirm</span></p>
             <button id='proceed-to-checkout'> <span id='proceed-words'>Proceed to Checkout </span>   <div id='arrow-wrapper'> <FaArrowRight /></div></button>
            </div>
            </div>
                 </>)
        
}

export default CartItem