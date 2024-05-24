import { useLayoutEffect } from "react";
import LoginForm from "../session/LoginForm";
import SignupForm from "../session/SignupForm";
import './FormWrapper.css'
import { useEffect } from "react";

export default function FormWrapper(){

    const modal = document.getElementById('wrapper-wrapper')
  

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
            <div id='signup-form-wrapper'>
                <SignupForm />
            </div>
        </div>
    )

      

}

