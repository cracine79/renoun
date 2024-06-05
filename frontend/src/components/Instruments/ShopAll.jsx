import { useSelector } from "react-redux"
import InfiniteCarousel from "../Carousel/InfinteCarousel"
import './ShopAll.css'

function ShopAll(){
        const instruments = Object.values(useSelector(state=>state.instruments))
        let guitars = []
        let keys = []
        let pedals = []
        
        instruments.forEach((instrument)=>{
            if(instrument.category==='Guitar'){
                guitars.push(instrument)
            }else if (instrument.category==='pedals_and_effects'){
                pedals.push(instrument)
            }else if (instrument.category==='keyboards_and_synths'){
                keys.push(instrument)
            }
        })
        debugger;
        
    return(
        <div id='shop-all-wrap'>
            <h1 className='category-title'>
                Guitars ({guitars.length})
            </h1>
            <InfiniteCarousel instrumentsObj = {guitars} index={2} />
            <h1 className='category-title'>
                Keyboards and Synthesizers ({keys.length})
            </h1>
            <InfiniteCarousel instrumentsObj = {keys} index={3} />
            <h1 className='category-title'>
                Pedals and Effects ({pedals.length})
            </h1>
            <InfiniteCarousel instrumentsObj = {pedals} index={4} />
        </div>
    )
}

export default ShopAll