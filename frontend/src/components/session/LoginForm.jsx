import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { useState } from "react";
import { Navigate } from 'react-router-dom'
import './LoginForm.css';
import { useEffect } from "react";
import { RiAlertFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function LoginForm(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.session.user)
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const modal = document.getElementById('wrapper-wrapper')
    const eye = document.getElementById('eye')
    const eyeOff = document.getElementById('eyeOff')
    const passwordBox = document.getElementById('password-signup')

    
   

    useEffect(()=>{
        
        const emailWarning = document.getElementById('emailWarning')

        if (email){
       
        if ((email.indexOf('@') == -1 || email.indexOf('.') == -1 || email[email.length-1]==='.')) {
            
            emailWarning.style.display='flex'
        } else{
            emailWarning.style.display='none'
        }
        } else {
        emailWarning.style.display='none'
        }
        },[email])
    if (currentUser) return <Navigate to="/" replace={true} />;
    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        modal.style.display='none';

        const user = {
            email,
            password
        }
        setEmail("")
        setPassword("")
        return dispatch(login(user))
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
   
            return navigate('/whoops')
          });        
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

    // function handleEmail(e){
    //      let emailCopy= setEmail(e.target.value)
    
    //     if (email.length>0){
    //             if ((email.length===1 || email.indexOf('@') == -1 || email.indexOf('.') == -1)) {
                    
    //                 emailWarning.style.display='flex'
    //             } else{
    //                 emailWarning.style.display='none'
    //             }
    //             } else {
    //             emailWarning.style.display='none'
    //             }
    // }    

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <p className='form-header'>Log in to Renoun</p>
                <div id='form-body'>
                    <div className='form-inputs'>
                        <label htmlFor="email-signup" className="form-input-title">Email</label>
                        <input className='form-input-box' id="email-signup" value={email} onChange={e=> setEmail(e.target.value)} />
                    </div>
                    <p id='emailWarning'><RiAlertFill /> {'.Please enter a valid email address'}</p>
                    <div className='form-inputs'>
                        <label htmlFor="password-signup" className="form-input-title">Password</label>
                        <input type = 'password' className='form-input-box' id="password-signup" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className='eyesHolder'>
                            <div id='eye' onClick={passwordOn}>
                                <FaRegEye />
                            </div>
                            <div id='eyeOff' onClick={passwordOff}>
                                 <FaRegEyeSlash />
                            </div>
                        </div>
                    </div>
                    <input className='form-button' type="submit" value="Log In" />
                </div>
            </form>

        </>
    )
}

export default LoginForm