import { useDispatch, useSelector} from "react-redux";
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { RiAlertFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { signup } from "../../store/session";
import { useNavigate } from "react-router-dom";
import './SignupForm.css'


function SignupForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
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

   


    useEffect(()=>{
        const confirmEmailMatchWarning = document.getElementById('confirmEmailMatchWarning')
        const confirmEmailWarning = document.getElementById('confirmEmailWarning')
        const emailWarning = document.getElementById('signupEmailWarning')

        if (email){
        if ((email.indexOf('@') == -1 || email.indexOf('.') == -1 || email[email.length-1]==='.')) {
            
            emailWarning.style.display='flex'
        } else{
            emailWarning.style.display='none'
        }
        } else {
             emailWarning.style.display='none'
        }


        if (confirmEmail){
            if (confirmEmail !== email){
                confirmEmailMatchWarning.style.display='flex';
                confirmEmailWarning.style.display='none'
            } else if ((confirmEmail.indexOf('@') == -1 || confirmEmail.indexOf('.') == -1 || confirmEmail[email.length-1]==='.')) {
            
                    confirmEmailWarning.style.display='flex';
                    confirmEmailMatchWarning.style.display='none'
                } 
            } else {
                confirmEmailMatchWarning.style.display='none';
                confirmEmailWarning.style.display='none'
            } 
        
        },[email, confirmEmail])


    if (currentUser) return <Navigate to="/" replace={true} />;

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
        
            return navigate('/whoopsTwo', {state: {errors: errors}});
          });
        }

        setErrors(['Emails must match'])
        return navigate('/whoopsTwo', {state: {errors: errors}});

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
                    <p id='signupEmailWarning'><RiAlertFill /> .Please enter a valid email address</p>

                    <div className='form-inputs'>
                        <label htmlFor="confirmEmail" className="form-input-title">Confirm Email</label>
                        <input className='form-input-box'  id="confirmEmail" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} />
                    </div>
                    <p id='confirmEmailWarning'><RiAlertFill /> .Please enter a valid email address</p>
                    <p id='confirmEmailMatchWarning'><RiAlertFill /> .Emails must match</p>
                    

                    <div className='form-inputs'>
                        <label htmlFor="password" className="form-input-title">Password</label>
                        <input className='form-input-box' type = "password" id="sign-signup" value={password} onChange={e => setPassword(e.target.value)} />
                    

                    <div id='signEyesHolder'>
                            <div id='signEye' onClick={passwordOn}>
                                <FaRegEye />
                            </div>
                            <div id='signEyeOff' onClick={passwordOff}>
                                 <FaRegEyeSlash />
                            </div>
                        </div>
                        </div>

                    <input className='form-button' type="submit" value="Sign Up" />
                </div>
            </form>

        </>
    )
}

export default SignupForm