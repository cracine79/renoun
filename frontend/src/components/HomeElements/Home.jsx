import TopBanner from "./TopBanner"
import GuitarsCarousel from "../Carousel/GuitarsCarousel"
import './Home.css'

export default function Home(){
    return(
       <div id='home-wrapper'>
            <TopBanner />
            <GuitarsCarousel />
       
        </div>
    )
}