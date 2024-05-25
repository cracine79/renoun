import background from './Whoops_Background.jpeg'
import './Whoops.css'
import LoginForm from '../session/LoginForm'


const Whoops = () =>{
    return(
        <>
            <img src={background} />
            <div id='login-cover'></div>
            <div id='login-bigwrap'>
               
                <div id='login-error-login-wrapper'>
                    <LoginForm />
                </div>
                <div id='login-error-login-header'>
                    <div id='login-error-orange-box'>
                        The password or email you entered is incorrect
                    </div>
                </div>
            </div>
          
            
        </>
    )
}

export default Whoops