
import './instrumentReviews.css'
import { fetchAllInstrumentReviews } from '../../store/instrumentReview';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createInstrumentReview } from '../../store/instrumentReview';
import CurrentSegment from './CurrentSegment';

const InstrumentReviews = ({instrumentId}) => {
    const dispatch = useDispatch();
    const instrumentReviewsObj = useSelector(state => state.instrumentReviews)
    const instrumentReviews1 = Object.values(instrumentReviewsObj)
    instrumentReviews1.reverse()
    let instrumentReviews = instrumentReviews1
    const [reviewPage, setReviewPage] = useState(0)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [instrumentReviewBody, setInstrumentReviewBody] = useState("")
    const [instrumentReviewTitle, setInstrumentReviewTitle] = useState("")
    const [filters, setFilters] = useState({'renoun': false, 1: false, 2: false, 3: false, 4: false, 5: false})
    let hasPurchases = false
    let sum = 0
    let stars_count = {}
    const currentUser = useSelector(state=>state.session.user)
    const current_instrument = useSelector(state=>state.instruments[instrumentId])
    const orders = useSelector(state=>state.orders)
    const ordersObj = Object.values(orders)
    let reviewer_name = "anonymous"
    let purchased = false
    const openFilterButton = document.getElementById('filter-by-closed')
    const closeFilterButton = document.getElementById('filter-by-open')
    const filterMenu = document.getElementById('filter-drop-down')
    ordersObj.forEach((order)=>{
        if(order){
            if(order.itemName.includes(current_instrument.brand) && order.itemName.includes(current_instrument.model)){
                purchased=true
            }
        }
    })

    if (currentUser){
        reviewer_name = (currentUser.firstName[0].toUpperCase()) + (currentUser.firstName.slice(1)) + " " + (currentUser.lastName[0].toUpperCase()) + "."
    }

    useEffect(()=>{
        dispatch(fetchAllInstrumentReviews(instrumentId))
    }, [instrumentId, dispatch])
    
    instrumentReviews.forEach((review)=> {
        sum += review.stars
        if(review.purchased_on_renoun == true){
            hasPurchases = true
        }
        if(stars_count[review.stars]){
            stars_count[review.stars] +=1
        } else {
            stars_count[review.stars] = 1
        }
    })
    const review_filter = filters['renoun']
    useEffect(()=>{
        debugger;
        if(filters['renoun']==true){
            instrumentReviews = instrumentReviews1.filter((review)=>{
                return review.purchased_on_renoun == true
            })
        }else{
            instrumentReviews = instrumentReviews1
        }
        debugger;
    },[filters])
    const numReviews = instrumentReviews.length
    let average = +sum/numReviews

    let reqPages = 0
    let reviewsPerPage = 5

    reqPages = Math.ceil(instrumentReviews.length/reviewsPerPage)   //Determine total number of review pages needed based upon total avail
    const pageSegments = []
    for(let i = 0; i<reqPages; i++){
        const start = reviewsPerPage * i
        pageSegments.push(instrumentReviews.slice(start, start+reviewsPerPage))
    }
    const currentSegment = pageSegments[reviewPage]



    const averageStars = (num)=>{
        if(num<0.25){
            return (
                <div id='no-star-inst' className='stars-instrument'></div>
            )
        }else if(0.25<=num && num <1.25){
            return(
                <div id='one-star-inst' className='stars-instrument'></div>
            )
        } else if(1.25<=num && num <1.75){
            return(
                <div id='one-half-star-inst' className='stars-instrument'></div>
            )
        }else if(1.75<=num && num<2.25){
            return(
                <div id='two-star-inst' className='stars-instrument'></div>
            )
        }else if(2.25<=num && num<2.75){
            return(
                <div id='two-half-stars-inst' className='stars-instrument'></div>
            )
        }else if(2.75 <= num && num < 3.25){
            return(
                <div id = 'three-stars-inst' className='stars-instrument'></div>
            )
        }else if (3.25<=num && num < 3.75){
            return(
                <div id='three-half-stars-inst' className='stars-instrument'></div>
            )
        } else if (3.75 <= num && num < 4.25){
            return(
                <div id='four-stars-inst' className='stars-instrument'></div>
            )
        } else if (4.25 <= num && num < 4.75){
            return(
                <div id='four-half-stars-inst' className='stars-instrument'></div>
            )
        } else {
            return(
                <div id='five-stars-inst' className='stars-instrument'></div>
            )
        }
    }

    const instrumentStarRating = (num)=>{
        if(num<0.25){
            return (
                <div id='no-star-inst' className='stars-instrument-indiv'></div>
            )
        }else if(0.25<=num && num <1.5){
            return(
                <div id='one-star-inst' className='stars-instrument-indiv'></div>
            )
        }else if(1.5<=num && num<2.5){
            return(
                <div id='two-star-inst' className='stars-instrument-indiv'></div>
            )
       }else if(2.5 <= num && num < 3.5){
            return(
                <div id = 'three-stars-inst' className='stars-instrument-indiv'></div>
            )
        } else if (3.5 <= num && num < 4.5){
            return(
                <div id='four-stars-inst' className='stars-instrument-indiv'></div>
            )
        } else {
            return(
                <div id='five-stars-inst' className='stars-instrument-indiv'></div>
            )
        }
    }  


    const getStars = num => {
       if(stars_count[num]){
        return stars_count[num]
       }else{
        return 0
       }
    }
    const getBars = num => {
        if(num == 1){
            return (
                <div id='hundred-percent' className='bar-rating'></div>
            )
        }else if(num >= 0.85){
            return(
                <div id='ninety-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.75){
            return(
                <div id='eighty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.65){
            return(
                <div id='seventy-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.55){
            return(
                <div id='sixty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.45){
            return(
                <div id='fifty-percent' className='bar-rating'></div>
            )
        } else if (num >= 0.35){
            return(
                <div id='forty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.25){
            return(
                <div id='thirty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.15){
            return(
                <div id='twenty-percent' className='bar-rating'></div>
            )
        }else if (num >= 0.05){
            return(
                <div id='ten-percent' className='bar-rating'></div>
            )
        } else {
            return(
                <div id='zero-percent' className='bar-rating'></div>
            )
        }
    }

    const StarRating = () => {
        return (<>
            <div className='star-rating'>
                {[...Array(5)].map((star, index)=>{
                    index +=1
                    return(
                        <button type='button' 
                                key={index}     
                                className={index <= hover ? 'on' : 'off'} 
                                onClick={()=>setRating(index)}
                                onMouseEnter={()=>setHover(index)}
                        
                            >
                        <span className='star'>&#9733;</span>
                        </button>
                    )
                })
                }
            </div>
        
            
        </>)
    }

    

    const modal = document.getElementById('product-review-modal')


    const postReview = () => {
        modal.style.display='none'
        const instrument_review={
            reviewer_name,
            title: instrumentReviewTitle,
            body: instrumentReviewBody,
            instrument_name: current_instrument.brand + " " + current_instrument.model,
            stars: rating, 
            purchased_on_renoun: purchased
        }
        dispatch(createInstrumentReview(instrument_review))

    }

    const openModal = () =>{
        modal.style.display = 'flex'
    }

    const closeModal = () =>{
        modal.style.display = 'none'
    }

    const handleReviewCount = () =>{
        if(numReviews > 0){
            return(
                <>
                 <div id = 'score-header' className = 'product-reviews-header'>{average.toFixed(1)}   {averageStars(average)} </div>
                 <div id= 'average-summary'> {average.toFixed(1)} out of 5 based on {numReviews} {numReviews == 1 ? 'review' : 'reviews'} </div></>
            )
        } else {
            return (
                <>
                       <div id='no-score'>This product has not yet received any reviews. Already have it?  Be the first to let others know what you think of it!</div>
                      
                </>
             
            )
        }
      
    }


    const pageButtons = () => {
        if (reqPages > 1){
            let countArray = []
            for (let i = 0; i < reqPages; i++){
                countArray.push(i)
            }
            let currentCountArray = countArray
            if (countArray.length > 5){
                if (reviewPage < 3){
                    currentCountArray = [0, 1, 2, 3, 4]
                } else if (reviewPage >= countArray.length - 2){
                    currentCountArray = countArray.slice(-5)
                } else {
                    currentCountArray = countArray.slice(reviewPage-2, reviewPage+3)
                }
                    
            }


            return(
                <> 
                    {currentCountArray.map((pageNum)=>{
                        return(
                            <span key = {pageNum} className = {pageNum==reviewPage ? 'current-page-button' : 'page-button'} 
                                                    id={`button-number-${pageNum.toString()}`}
                                                    onClick = {()=>{
                                                        setReviewPage(pageNum)
                        
                                                    }}>{pageNum + 1}</span>
                        )
                    })}
                </>
            )
        }
    }

    const previousButton = () => {
        if (reviewPage > 0){
            return(
                <span id='previous-button' onClick = {()=>{setReviewPage(reviewPage-1)}}> &lt; &nbsp;   Previous </span>
            )
        }
    }

    const nextButton = () => {
        if (reviewPage+1 < reqPages){
            return(
                <span id='next-button' onClick = {()=>{setReviewPage(reviewPage+1)}}> Next &nbsp; &gt; </span>
            )
        }
    }
    

    const dealWithCurrentSegment = () => {
        if (currentSegment){
            return (
                <CurrentSegment currentSegment = {currentSegment}/>
            )
        } else {
            return (<></>)
        }
    }

    const tickPurchased = () => {
        setFilters((filters)=>{
            return ({
                ...filters,
                'renoun' : !filters['renoun']
            }
                
            )
        })
    }
    console.log(filters)
    const purchasesOption = () =>{
        return(
            <>
                 <div className='star-filter'><input type= 'checkbox' onChange={tickPurchased}/>Purchased on Renoun</div>
            </>
        )
    }

    const handle_filter_options = () => {
        const includedStars = []
        for(let i = 5; i > 0; i--){
            if(stars_count[i]){
                includedStars.push(i)
            }
        }

        return (
           <>   
                {hasPurchases ? purchasesOption() : <></>}
                {includedStars.map((i)=>{
                    return <div className='star-filter'><input type= 'checkbox'/>{i} Stars <span>{instrumentStarRating(i)}</span>({stars_count[i]})</div>
                })}
           </>
           
        )
       
    }

    const openFilters = () =>{
        openFilterButton.style.display = 'none'
        closeFilterButton.style.display = 'flex'
        filterMenu.style.display = 'block'
    }

    const closeFilters = () =>{
        openFilterButton.style.display = 'flex'
        closeFilterButton.style.display = 'none'
        filterMenu.style.display = 'none'
    }


    return(
    <>
        <div id='product-review-modal'>
            <div id='product-review-box'>
                <h1 id='write-product-review'>Write a Product Review</h1>
                <div id='close-review-x' onClick = {closeModal}>X</div>
                <hr id='product-review-line'></hr>
                <p className='product-form-title'>Your Rating</p>
                <div id='instrument-stars'>
                    <StarRating />
                </div>
                <p className='product-form-title'>Review Title</p>
                <input id='product-review-title-text' type='text' onChange={e=>setInstrumentReviewTitle(e.target.value)}/>
                <p className='product-form-title'>Your Product Review</p>
                <textarea id='product-review-body-text' wrap="soft" onChange={e=>setInstrumentReviewBody(e.target.value)}></textarea>
                <div id='post-product-review' onClick = {postReview}>Post Review</div>
                <p id='review-tips'>Review Tips</p>
                <p className ='tip-sentence'>	&#10003; Do: talk about how it sounds, mention pros and cons, and compare it to other products</p>
                <p className ='tip-sentence'> &#x2717; Don't: review a seller, your shipping experienc,e or include offensive content</p>
            </div>
        </div>
        <div id='product-reviews-wrapper'>
            <div className = 'product-reviews-header'>Product Reviews</div>
            <div id='score-data-header'>
                <div id='instrument-score'>
                    {handleReviewCount()}            
                   
                    <div id='write-product-review-button' onClick = {openModal}>Write a Product Review</div>
                </div>
                <div id='star-breakdown'>
                    <div className='star-line'> 5 stars {getBars(stars_count[5]/numReviews)}   {getStars(5)} {stars_count[5] == 1 ? "review" : "reviews"}</div>
                    <div className='star-line'> 4 stars {getBars(stars_count[4]/numReviews)}   {getStars(4)} {stars_count[4] == 1 ? "review" : "reviews"}</div>
                    <div className='star-line'> 3 stars {getBars(stars_count[3]/numReviews)}  {getStars(3)} {stars_count[3] == 1 ? "review" : "reviews"}</div>
                    <div className='star-line'> 2 stars {getBars(stars_count[2]/numReviews)}  {getStars(2)} {stars_count[2] == 1 ? "review" : "reviews"}</div>
                     <div className='star-line'> 1 star {'\u00A0'}{getBars(stars_count[1]/numReviews)}  {getStars(1)} {stars_count[1] == 1 ? "review" : "reviews"}</div>
                </div>

            </div>
            <div id='product-mid-ribbon'>
                <div id='filter-outer-wrapper'>     
                    <div id='filter-by-closed' onClick = {openFilters}>Filter By&nbsp;&nbsp;&nbsp;&nbsp;<span id='arrow'>⌄</span></div>
                    <div id='filter-by-open' onClick = {closeFilters}>Filter By&nbsp;&nbsp;&nbsp;&nbsp;<span id='up-arrow'>^</span></div>
                    <div id='filter-drop-down'>
                        <div id='filter-inner-wrapper'>
                            <p id='filter-head'>Filter by</p>
                            {handle_filter_options()}
                        </div>
                    </div>
                </div>
            </div>
            <div id = 'actual-review-wrapper'>
                {dealWithCurrentSegment()}
            </div>
            <div id='page-buttons'>
                {previousButton()}              
                {pageButtons()}
                {nextButton()}
            </div>
           
        </div>
            </>
    )
}

export default InstrumentReviews;