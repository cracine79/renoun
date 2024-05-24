import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import './Navigation.css'




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
            <button id='sell-button'>Sell Your Gear</button>
            {sessionLinks}
       </div>
       </>
    )

}

export default Navigation