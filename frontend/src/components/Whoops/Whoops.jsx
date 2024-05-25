import background from './Whoops_Background.jpeg'
import './Whoops.css'
import LoginForm from '../session/LoginForm'
import SignupForm from '../session/SignupForm'

const Whoops = () =>{
    return(
        <>
            <img src={background} />
            <div id='cover'></div>
            <div id='bigwrap'>
               
                <div id='error-login-wrapper'>
                    <LoginForm />
                </div>
                <div id='error-login-header'>
                    <div id='error-orange-box'>
                        The password or email you entered is incorrect
                    </div>
                </div>
            </div>
          
            
        </>
    )
}

export default Whoops