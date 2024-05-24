import LoginForm from "../session/LoginForm";
import SignupForm from "../session/SignupForm";
import './FormWrapper.css'


export default function FormWrapper(){
    const loginForm = document.getElementById('login-form-wrapper')
    const loginLink = document.getElementById('log-in-nav')

    const modal = document.getElementById('wrapper-wrapper')
    if (modal.className==='login'){
        loginForm.style.display='flex';
        loginLink.className='active';
    }
    const handleClick =(e) => {
        if (e.target.id==='wrapper-wrapper'){
            modal.style.display='none'
        }
    }

    return(
        <div id='wrapper-wrapper' onClick={handleClick}>
            <div id='login-form-wrap' >
                <p id="sign-up-nav">
                    Sign Up
                </p>
                <p id="log-in-nav">
                    Log In
                </p>
            </div>
            <div id='login-form-wrapper'>
                <LoginForm />
            </div>
        </div>
    )

}

