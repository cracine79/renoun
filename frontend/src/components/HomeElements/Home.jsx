import TopBanner from "./TopBanner"
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
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

            <div id='anyone-can-sell'>
                <h1 className='home-page-title'>Anyone Can Sell On Reverb</h1>
            </div>

            <div id='sell-box-wrap'>
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
                            <div className='step-words'>Millions of high-quality buyers from all over the world search for gear on Reverb.</div>
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


            <div id='trending-searches-wrap'>
                <h1 className='home-page-title'>Trending Searches</h1>
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
    )
}