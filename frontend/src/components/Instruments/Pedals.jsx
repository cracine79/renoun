import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Guitars.css'
import RealGenericCarousel from '../Carousel/RealGenericCarousel'
import InfiniteCarousel from '../Carousel/InfinteCarousel'

function Pedals (){
    
    const instrumentsObj = useSelector(state => state.instruments)
    const instruments = Object.values(instrumentsObj)
    const pedals = [];
    instruments.forEach((instrument)=>{
        if(instrument.category.toLowerCase()==='pedals_and_effects' && instrument.available===true){
                pedals.push(instrument)
            }
    })

    let rowRequirement

    if(instruments.length%6===0){
        rowRequirement = instruments.length/6
    } else {
        rowRequirement = Math.floor(instruments.length/6)+1
    }

    let i=0
    let allRows = []

    while(i<rowRequirement){
        let row = pedals.slice((i*6+0),(i*6+6))
        allRows.push(row)
        i+=1
    }


    
    return(
        <div id='guitars-page-wrapper-wrapper'>
            <div id='guitars-page-wrapper'>
                <div id='guitars-page-links-wrapper'>
                    <Link to='/'>Home</Link>  &nbsp;  &gt; &nbsp;Pedals and Effects
                </div>
            </div>

            <h1 id='guitars-page-title'>Pedals and Effects </h1>

            {allRows.map((row, indexPedals)=>{
                    return(
                        <div id='realGenWrap' key = {indexPedals}>
                             <RealGenericCarousel  row={row} key={indexPedals} rowId={indexPedals}/>
                         </div>   
                       
                    )
                })}

        </div>
    )
}

export default Pedals