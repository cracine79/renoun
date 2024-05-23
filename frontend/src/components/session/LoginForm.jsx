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

    if (currentUser) return <Navigate to="/" replace={true} />;



    const handleSubmit = e => {
        e.preventDefault();
        setErrors([])

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
                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Sign In" />
            </form>

        </>
    )
}

export default LoginForm