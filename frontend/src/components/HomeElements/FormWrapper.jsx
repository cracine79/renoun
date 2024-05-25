
import LoginForm from "../session/LoginForm";
import SignupForm from "../session/SignupForm";
import './FormWrapper.css'



export default function FormWrapper(){

    const modal = document.getElementById('wrapper-wrapper')
    const loginNav = document.getElementById('log-in-nav');
    const signupNav = document.getElementById('sign-up-nav')
    const loginForm = document.getElementById('login-form-wrapper')
    const signupForm = document.getElementById('signup-form-wrapper')
    const signupSquare = document.getElementById('signup-mnw')
    const loginSquare = document.getElementById('login-mnw')
  

    const handleClick =(e) => {
        if (e.target.id==='wrapper-wrapper'){
            modal.style.display='none'
        }
    }

    const switchSignup =() =>{
        modal.className='signup'
        loginNav.className='inactive'
        signupNav.className='active'
        loginForm.style.display='none'
        signupForm.style.display='flex'
        loginSquare.className='passive-menu-nav-wrapper'
        signupSquare.className='active-menu-nav-wrapper'
    }

    const switchLogin =() =>{
        modal.className='login'
        loginNav.className='active'
        signupNav.className='inactive'
        loginForm.style.display='flex'
        signupForm.style.display='none'
     
        loginSquare.className='active-menu-nav-wrapper'
        signupSquare.className='passive-menu-nav-wrapper'
    }

    return(
        <div id='wrapper-wrapper' onClick={handleClick}>
            <div id='login-form-wrap' >
                <div id='signup-mnw' className='menu-nav-wrapper' onClick={switchSignup}>
                    <p id="sign-up-nav">
                        Sign Up
                    </p> 
                </div>
                <div id='login-mnw' className='menu-nav-wrapper' onClick={switchLogin}>
                    <p id="log-in-nav">
                        Log In
                    </p>
                </div>
            </div>
            <div id='login-form-wrapper'>
                <LoginForm />
            </div>
            <div id='signup-form-wrapper'>
                <SignupForm />
            </div>
        </div>
    )

      

}

