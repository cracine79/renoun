import background from './Whoops_Background.jpeg'
import './Whoops.css'

import SignupForm from '../session/SignupForm'
import { useLocation } from 'react-router-dom'

const WhoopsTwo = () =>{
    const location=useLocation();
    const  {errors} = location.state || {errors:[]}
    console.log(errors)
    let message = ""
    // const errors = location.state
    // let m = 'oops';
    // if(errors){
    //     if (errors.length>0 && errors[0].message){
    //         message = errors[0].message
    //     }
    //     else{
    //         message="Something went wrong. Please try logging in again"
    //     }
        
    // }
    
   
   
//    if(location.state){
//     debugger;
   
//         errors = data.message
//     } else if (location.state.errors.message){
//         errors = location.state.errors.message
//     } else if (location.state.errors) {
//         errors = location.state.errors
//     } else {
//         errors = location.state
//     }
    if (errors[0].length>0){
        message = errors
    } else {
        message = errors[0].message;
    }
    console.log(message)
   
    return(
       
        <>
            
            <img src={background} />
            <div id='cover'></div>
            <div id='bigwrap'>
         
                <div id='error-login-wrapper'>
                    <SignupForm/>
                   
                </div>
                <div id='error-login-header'>
                    <div id='error-orange-box'>
                   
                        {message}
                    </div>
                </div>
            </div>
          
            
        </>)
    
}

export default WhoopsTwo