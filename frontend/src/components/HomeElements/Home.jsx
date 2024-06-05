import TopBanner from "./TopBanner"
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
import './Home.css'
import InfiniteCarousel from "../Carousel/InfinteCarousel"
import { useSelector } from "react-redux"

export default function Home(){

    const instruments = useSelector(state=>state.instruments)
    return(
       <div id='home-wrapper'>
            <TopBanner />
   
            <div id='explore-wrapper'>
                    <h1 id='explore-words'>Explore Gear Just For You</h1>

            </div>
      
            {/* <GuitarsCarousel /> */}
            <InfiniteCarousel instrumentsObj = {instruments} index={1} />
       
            
       
        </div>
    )
}