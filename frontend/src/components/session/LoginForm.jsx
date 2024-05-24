import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { useState } from "react";
import { Navigate } from 'react-router-dom'
import './LoginForm.css';


function LoginForm(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.session.user)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const modal = document.getElementById('wrapper-wrapper')
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
          });

        
    }

    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <p className='form-header'>Log in to Renoun</p>
                <div id='form-body'>
                    <div className='form-inputs'>
                        <label htmlFor="email" className="form-input-title">Email</label>
                        <input className='form-input-box' id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor="password" className="form-input-title">Password</label>
                        <input className='form-input-box' id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <input className='form-button' type="submit" value="Log In" />
                </div>
            </form>

        </>
    )
}

export default LoginForm