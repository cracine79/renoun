import background from '../../../assets/images/Whoops_Background.jpeg'
import './WhoopsTwo.css'

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
        message = errors[0].message.slice(48);
    }

    return(
       
        <>
            
            <img src={background} />
            <div id='cover'></div>
            <div id='bigwrap'>
              
         
                <div id='error-login-wrapper'>
                    <SignupForm/>
                   
                </div>
                <div id='error-login-header'>
                  
                </div>
                <div id='actual-errors'>
                   
                   {message}
               </div>
                <h1 className='join'><p id='dot'>.  </p>Join millions of music <br /> makers around the world</h1>
               

                <p className='sorry'> Sorry we couldn't create your account <br />Please fix these errors to proceed</p>
            
            </div>
          
            
        </>)
    
}

export default WhoopsTwo