import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import './Navigation.css'
import { LuHeart } from "react-icons/lu"
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useCallback } from "react";
import { PiUserCircleFill } from "react-icons/pi";






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
    

    const handleClick = useCallback((e) => {
        e.preventDefault();
        return dispatch(sessionActions.logout())
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
                        <p className='dropdown-link'>My Profile</p>
                        <p className='dropdown-link' onClick={handleClick}>Logout</p>

                    </div>
                </div>
            </div>
        </div>
      
        </>
    ) : (
        <>
                <Link className="userlink" onClick={handleSignup}>Sign Up</Link>
                <p className="userlink" onClick={handleLogin}>Log In</p>
         
        

       
        </>
    );


    return (
        <>
        <div className="header_main">
            <img id='logo' src='https://findlogovector.com/wp-content/uploads/2018/11/reverb-logo-vector.png'></img>
            <div id='searchWrapper'>
                <input type='text' id='searchbar' value="Shop for used & new music gear" />
                <div id='searchButton'>
                    <BsSearch />
                </div>
            </div>
        
            

            <div id="buttonWrapper">
                <button id='sell-button'>Sell Your Gear</button>
            
                <div className='iconlink'>
                    <div id='heart'>
                    <LuHeart /> 
                    </div>
                    Favorites            
                </div>

                <div className='iconlink'>
                    <div id='cart'>
                    <FiShoppingCart />
                    </div>
                    Cart            
                </div>
                {sessionLinks}
            </div>
       </div>
       </>
    )

}

export default Navigation

