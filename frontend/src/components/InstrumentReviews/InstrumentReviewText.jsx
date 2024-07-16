function InstrumentReviewText({text}){


    const shortenReviewBody = (text) => {
        if (text.length < 270){
            return text
        } else {
            return (
                <>
                 {text.slice(0,260)}...
                 <span className='expand'>   read more</span>
                </>   
            )
        }
        
    }

    return(
        <>
            Hellow from instrument review
            {shortenReviewBody(text)}
        </>
    )

}
 
export default InstrumentReviewText