import { useDispatch } from "react-redux";
import { signup } from "../../store/session";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import './SignupForm.css'
// import { useEffect } from "react";
import { RiAlertFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function SignupForm(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.session.user)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState("")
    const modal = document.getElementById('wrapper-wrapper')
    const eye = document.getElementById('signEye')
    const eyeOff = document.getElementById('signEyeOff')
    const passwordBox = document.getElementById('sign-signup')

    if (currentUser) return <Navigate to="/" replace={true} />;


    // useEffect(()=>{
        
    //     const emailWarning = document.getElementById('signupEmailWarning')

    //     if (email){
    //     if ((email.indexOf('@') == -1 || email.indexOf('.') == -1)) {
            
    //         emailWarning.style.display='flex'
    //     } else{
    //         emailWarning.style.display='none'
    //     }
    //     } else {
    //     emailWarning.style.display='none'
    //     }
    //     },[email])




    const handleSubmit = e => {
        e.preventDefault();
        modal.style.display='none'

        if (email === confirmEmail){
        setErrors([])


        const user = {
            firstName,
            lastName,
            email,
            password
        }
   
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmEmail("")

        return dispatch(signup(user))
        .catch(async (res) => {
            let data;
            try {
              // .clone() essentially allows you to read the response body twice
              data = await res.clone().json();
            } catch {
              data = await res.text(); // Will hit this case if the server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          });
        }

        return setErrors(['Emails must match'])

    }


    const passwordOn = ()=>{
        eye.style.display='none'
        eyeOff.style.display='flex'
        passwordBox.setAttribute('type', 'text')
    }

    const passwordOff = () =>{
        eye.style.display='flex'
        eyeOff.style.display='none'
        passwordBox.setAttribute('type', 'password')
    }
    return(
        <>
            <form className="signup-form" onSubmit={handleSubmit}>
                <p className='form-header'>Create a Renoun Account</p>
                <div id='form-body'>
                    <div className='name-wrapper'>
                       <div className='halfname-wrapper'>
                            <label htmlFor="firstName" className="form-input-title">First Name</label>
                            <input className='name-input-box' id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className='halfname-wrapper'>
                            <label htmlFor="lastName" className="form-input-title">Last Name</label>
                            <input className='name-input-box' id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>

                    <div className='form-inputs'>
                        <label htmlFor="email" className="form-input-title">Email</label>
                        <input className='form-input-box' id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <p id='signupEmailWarning'><RiAlertFill /> {'.Please enter a valid email address'}</p>

                    <div className='form-inputs'>
                        <label htmlFor="confirmEmail" className="form-input-title">Confirm Email</label>
                        <input className='form-input-box'  id="confirmEmail" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} />
                    </div>
                    

                    <div className='form-inputs'>
                        <label htmlFor="password" className="form-input-title">Password</label>
                        <input className='form-input-box' type = "password" id="sign-signup" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className='eyesHolder'>
                            <div id='signEye' onClick={passwordOn}>
                                <FaRegEye />
                            </div>
                            <div id='signEyeOff' onClick={passwordOff}>
                                 <FaRegEyeSlash />
                            </div>
                        </div>

                    <input className='form-button' type="submit" value="Sign Up" />
                </div>
            </form>

        </>
    )
}

export default SignupForm