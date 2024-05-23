import { useDispatch } from "react-redux";
import { signup } from "../../store/session";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import './SignupForm.css'


function SignupForm(){

    const dispatch = useDispatch();
    const currentUser = useSelector(state=>state.session.user)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState("")

    if (currentUser) return <Navigate to="/" replace={true} />;



    const handleSubmit = e => {
        e.preventDefault();

        if (password === confirmPassword){
        setErrors([])


        const user = {
            firstName,
            lastName,
            email,
            password
        }
        debugger;
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

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

        return setErrors(['Passwords must match'])

        
    }

    return(
        <>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                <label htmlFor="userName">Email</label>
                <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type = "password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type = "password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <input type="submit" value="Sign In" />
            </form>

        </>
    )
}

export default SignupForm