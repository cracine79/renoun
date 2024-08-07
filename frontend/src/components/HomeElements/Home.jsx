import TopBanner from "./TopBanner"
import './Home.css'
import InfiniteCarousel from "../Carousel/InfinteCarousel"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Home(){

    const instruments = useSelector(state=>state.instruments)
    const navigate = useNavigate();

    const handleClick =(e)=>{
        navigate('/Outcomes', {state:{searchWord: e.currentTarget.id}})
    }

    const array = [13, 21, 50, 11, 33, 39]
    const deals = []
    array.forEach((num)=>{
        deals.push(instruments[num])
    }
    )


    return(
       <div id='home-wrapper'>
            <TopBanner />
            <div id='all-carousel-word-wrap'>
            <div id='explore-wrapper'>
                    <h1 id='explore-words'>Explore Gear Just For You</h1>

            </div>
      
            {/* <GuitarsCarousel /> */}
            <InfiniteCarousel instrumentsObj = {instruments} index={1} />

            </div>

            

            <div id='sb-wrap-wrap'>
                <div id='sell-box-wrap'>

           
                    <h1 className='home-page-title' id='anyone-can-sell'>Anyone Can Sell On Renoun</h1>
            
                    <div className='sell-box'>
                        <div className = 'sell-box-inner-wrap'>
                            <div className='sell-box-step-no'>
                                1
                            </div>
                            <div className='sell-box-right-wrap'>
                                <div className='step-title'>List It</div>
                                <div className='step-words'>Data from past sales makes it easy to list your item at the right price.</div>

                            </div>
                        </div>   
                    </div>

                    <div className='sell-box'>
                        <div className='sell-box-inner-wrap'>
                            <div className='sell-box-step-no'>
                                2
                            </div>
                            <div className='sell-box-right-wrap'>
                                <div className='step-title'>Sell It</div>
                                <div className='step-words'>Millions of high-quality buyers from all over the world search for gear on Renoun.</div>
                            </div>
                        </div>        
                    </div>

                    <div className='sell-box'>
                        <div className='sell-box-inner-wrap'>
                            <div className='sell-box-step-no'>
                                3
                            </div>
                            <div className='sell-box-right-wrap'>
                                <div className='step-title'>Ship It</div>
                                <div className='step-words'>From boxes & discounted labels to packing guides, we make it easy to ship gear.</div>

                            </div>
                        </div>
                        
                    </div>
            </div>


            </div>
            

            <div id='ts-wrap-wrap'>
                <div id='trending-searches-wrap'>
                    <h1 className='home-page-title' id='ts-words'>Trending Searches</h1>
                    <div id='trend-search-box-outer-wrap'>
                        <div className='trend-search-box' id='fender' onClick={handleClick}>
                            <div className='trend-search-image' id='fender-searching'></div>
                            <div className='tsw-big'>Fender</div>
                            <div className='tsw-small'>in Guitars</div>
                        </div>
                        <div className='trend-search-box' id='boss' onClick={handleClick}>
                            <div className='trend-search-image' id='boss-searching'></div>
                            <div className='tsw-big'>Boss</div>
                            <div className='tsw-small'>in Pedals and Effects</div>
                        </div>
                
                        <div className='trend-search-box' id='gibson' onClick={handleClick}>
                            <div className='trend-search-image' id='gibson-searching'></div>
                            <div className='tsw-big'>Gibson</div>
                            <div className='tsw-small'>in Guitars</div>
                        </div>
                
             
                    </div>
                </div>



            </div>
           
           

            <div id='all-carousel-word-wrap-deals'>
            <div id='explore-wrapper-deals'>
                    <h1 id='explore-words-deals'>Blink and-you'll-miss-it deals. This gear won't last long</h1>

            </div>
      
            {/* <GuitarsCarousel /> */}
            <InfiniteCarousel instrumentsObj = {deals} index={2} />

            </div>
           {/* <div id='deals'>
           <h1 className id='blink'>Blink and-you'll-miss-it deals. This gear won't last long</h1>
      
                <InfiniteCarousel instrumentsObj = {deals} index={2} />

       

           </div> */}
            <div id='rap-wrap-rap'>
                <div id='sell-your-gear-big'> 
                    <div id='sell-big-left'>  
                        <div id='sell-big-word-wrapper'>
                            <h1 id='sell-big-header'>Sell Your Gear on Renoun</h1>
                            <p className='sell-big-words'> &#10003; &nbsp; Secure Transactions & Safe Shipping</p>
                            <p className='sell-big-words'> &#10003; &nbsp; List for Free in Minutes</p>
                            <p className='sell-big-words'> &#10003; &nbsp; Extensive Buyer Community</p>
                        </div>
                    </div>
                    <div id='sell-big-right'>
                        <div id='sell-pic-right'></div>
                    </div>
                 </div>
            </div>
  


      
       
         
    
            
       
        </div>
    )
}