import LoginForm from "../session/LoginForm";
import SignupForm from "../session/SignupForm";
import './FormWrapper.css'


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
                <LoginForm />
            </div>`
        </div>
    )

}

