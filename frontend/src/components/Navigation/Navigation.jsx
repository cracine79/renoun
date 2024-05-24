import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import './Navigation.css'
import { LuHeart } from "react-icons/lu"
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";



function Navigation(){
    const dispatch = useDispatch;

    const handleClick = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.logout())
      };


    const sessionUser = useSelector(state=> state.session.user);
   

     
    const sessionLinks = sessionUser ? (
        <>
            <button onClick={handleClick}>Log Out</button>
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
            <input type='text' id='searchbar' value="Shop for used & new music gear" />
            <div id='searchButton'>
                <BsSearch />
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