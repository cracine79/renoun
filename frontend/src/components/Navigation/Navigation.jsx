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

    const handleClick = useCallback((e) => {
        e.preventDefault();
        return dispatch(sessionActions.logout())
      });


    const sessionUser = useSelector(state=> state.session.user);
   
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
                <Link className="userlink" to='/signup'>Sign Up</Link>
                <Link className="userlink" to='/login'>Log In</Link>
         
        

       
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