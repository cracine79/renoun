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
   

            <GuitarsCarousel />
            <InfiniteCarousel instrumentsObj = {instruments} index={1} />
       
            
       
        </div>
    )
}