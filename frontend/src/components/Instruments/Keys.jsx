import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Guitars.css'
import RealGenericCarousel from '../Carousel/RealGenericCarousel'
import InfiniteCarousel from '../Carousel/InfinteCarousel'

function Keys (){
    
    const instruments = useSelector(state => Object.values(state.instruments))
    const keys = [];
    instruments.forEach((instrument)=>{
        if(instrument.category.toLowerCase()==='keyboards_and_synths' && instrument.available===true){
                keys.push(instrument)
            }
    })

    let rowRequirement

    if(keys.length%6===0){
        rowRequirement = keys.length/6
    } else {
        rowRequirement = Math.floor(keys.length/6)+1
    }

    let i=0
    let allRows = []

    while(i<rowRequirement){
        let row = keys.slice((i*6+0),(i*6+6))
        allRows.push(row)
        i+=1
    }


    
    return(
        <div id='guitars-page-wrapper-wrapper'>
            <div id='guitars-page-wrapper'>
                <div id='guitars-page-links-wrapper'>
                    <Link to='/'>Home</Link>  &nbsp;  &gt; &nbsp;Keyboards and Synths
                </div>
            </div>

            <h1 id='guitars-page-title'>Keyboards and Synths </h1>

            {allRows.map((row, indexKeys)=>{
                    return(
                        <div id='realGenWrap' key={indexKeys}>
                             <RealGenericCarousel key={indexKeys} row={row} rowId={indexKeys}/>
                         </div>   
                       
                    )
                })}

        </div>
    )
}

export default Keys