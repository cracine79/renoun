import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'




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
            <li>
                <NavLink to='/login'>Log In</NavLink>
            </li>
            <li>
                <NavLink to='/signup'>Sign Up</NavLink>
            </li>
        </>
    );


    return (
        <>
        <input type='text' value="Shop for used & new music gear" />
        <button>Sell Your Gear</button>
       {sessionLinks}
       </>
    )

}

export default Navigation