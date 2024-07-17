import { useState } from "react"
import { useEffect } from "react";
import './InstrumentReviewText.css'

function InstrumentReviewText({text, id}){
    const [seeMore, setSeeMore] = useState(false);
  
    const shortenReviewBody = (text) => {
       
        // if (text.length < 270){
        //     return text
        // } else {
        //     return (
        //         <>
                
        //          {text.slice(0,260)}...
        //          <span className='expand'>   read more</span>
        //         </>   
        //     )
        // }
        
    }
    useEffect(()=>{
        if(text.length < 225){
            setSeeMore(true)
        }
    }, [text]

    )
  
    const appropriateText = () =>{
        if(text.length < 225){
            return ""
        } else if (seeMore == false){
            return "  read more"
        } else {
            return "  collapse"
        }
    }
    
    return(
        <>
            <div>
            <div className = 'text-body' key={id}>
                {seeMore  ? text : `${text.substring(0,225)}...`}
                <span className='see-more-text' onClick={()=>setSeeMore(!seeMore)}>
                        {appropriateText()}
                </span>
            </div>
        </div>
        </>
    )

}
 
export default InstrumentReviewText