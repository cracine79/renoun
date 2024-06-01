import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import './Navigation.css'
import { LuHeart } from "react-icons/lu"
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { PiUserCircleFill } from "react-icons/pi";
import Renoun from '../../../assets/images/Renoun.png'
import { Link } from "react-router-dom";
import { clearCart } from "../../store/cart";
import { useEffect } from "react";
import { clearOrders } from "../../store/order";






function Navigation(){
    
    const currentUser = useSelector(state=>state.session.user)

    const dispatch = useDispatch();
    const modal= document.getElementById('wrapper-wrapper');
    const loginNav = document.getElementById('log-in-nav');
    const signupNav = document.getElementById('sign-up-nav')
    const loginForm = document.getElementById('login-form-wrapper')
    const signupForm = document.getElementById('signup-form-wrapper')
    const signupSquare = document.getElementById('signup-mnw')
    const loginSquare = document.getElementById('login-mnw')
    const countSquare = document.getElementById('item-count')
    const objCart = useSelector(state=>(state.carts))
    const cart = Object.values(objCart)
    let length = cart.length;

    useEffect(()=>{
    
        if (cart){
            if(countSquare){
        if (cart.length > 0){
            countSquare.style.display='flex'
            countSquare.innerHTML= cart.length;
        } else {
            countSquare.style.display='none'
        }}}
    },[cart.length])

    const handleClick = ((e) => {
        dispatch(clearCart())
        dispatch(clearOrders())
        countSquare.style.display='none'
        dispatch(sessionActions.logout())

      });

    const sessionUser = useSelector(state=> state.session.user);
 
    
  

    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const handleLogin =() =>{
        modal.style.display='flex'
        modal.className='login'
        loginNav.className='active'
        signupNav.className='inactive'
        loginForm.style.display='flex'
        signupForm.style.display='none'
     
        loginSquare.className='active-menu-nav-wrapper'
        signupSquare.className='passive-menu-nav-wrapper'
    }

    const handleSignup =() =>{
        
        modal.style.display='flex'
        modal.className='signup'
        loginNav.className='inactive'
        signupNav.className='active'
        loginForm.style.display='none'
        signupForm.style.display='flex'
        loginSquare.className='passive-menu-nav-wrapper'
        signupSquare.className='active-menu-nav-wrapper'
      
        
    }


    const sessionLinks = sessionUser ? (
        <>

        <div className="dropdown">
            <div className='menutext'>
                <div id='userCircle'>
                    <PiUserCircleFill />
                </div>
                Menu
                <div className="dropdown-content">
                    <div id="dc-wrapper">
                        <div id="user-menu-name">
                            {cap(currentUser.firstName)} {cap(currentUser.lastName)}
                        </div>
                        <hr className='dropdown-line'></hr>
                        <p className='dropdown-header'>MY ACCOUNT</p>
                        <br></br>
                        <Link to='/Orders' id='link-to-orders' className='dropdown-link'>Orders</Link>
                        <Link to='/' className='dropdown-link' onClick={handleClick}>Logout</Link>

                    </div>
                </div>
            </div>
        </div>
      
        </>
    ) : (
        <>
                <div className="userlink" onClick={handleSignup}>Sign Up</div>
                <div className="userlink" onClick={handleLogin}>Log In</div>
         
        

       
        </>
    );


    return (
        <>
        <div className="header_main">
            <Link id='logo-link' to='/'><img id='logo' src={Renoun}/></Link>
            <div id='searchWrapper'>
                <input type='text' id='searchbar' value="Shop for used & new music gear" />
                <div id='searchButton'>
                    <BsSearch />
                </div>
            </div>
        
            

            <div id="buttonWrapper">
                <button id='sell-button'>Sell Your Gear</button>
            
                <div className='iconlink'>
                <div id='favs-word-nav'>
                    <div id='favs'>
                        <Link to='/favorites' id='heart'>
                        <LuHeart /> 
                        </Link>
                        Favorites </div>
                    </div>            
                </div>

                <div className='iconlink'>
                  <div id='cart-word'>
                    <div id='cart'>
                     
                        <Link id='cart-link' to='/cart'>
                            <FiShoppingCart />
                        </Link>
                        <div id='item-count'>

                        </div>
                    </div>
                    Cart
                </div>               
                </div>
                {sessionLinks}
            </div>
       </div>
       </>
    )

}

export default Navigation

