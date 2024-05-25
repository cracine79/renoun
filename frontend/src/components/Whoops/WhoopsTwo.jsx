import background from './Whoops_Background.jpeg'
import './Whoops.css'

import SignupForm from '../session/SignupForm'
import { useLocation } from 'react-router-dom'

const WhoopsTwo = () =>{
    const location=useLocation();

    return(
        <>
            
            <img src={background} />
            <div id='cover'></div>
            <div id='bigwrap'>
         
                <div id='error-login-wrapper'>
                    <SignupForm/>
                   
                </div>
                <div id='error-login-header'>
                    <div id='error-orange-box'>
                   
                        {location.state.errors}
                    </div>
                </div>
            </div>
          
            
        </>
    )
}

export default WhoopsTwo