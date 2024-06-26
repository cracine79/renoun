import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Guitars.css'
import RealGenericCarousel from '../Carousel/RealGenericCarousel'
import InfiniteCarousel from '../Carousel/InfinteCarousel'

function Guitars (){
    
    const instruments = useSelector(state => Object.values(state.instruments))
    const guitars = [];
    instruments.forEach((instrument)=>{
        if(instrument.category.toLowerCase()==='guitar' && instrument.available===true){
                guitars.push(instrument)
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
        let row = guitars.slice((i*6+0),(i*6+6))
        allRows.push(row)
        i+=1
    }


    
    return(
        <div id='guitars-page-wrapper-wrapper'>
            <div id='guitars-page-wrapper'>
                <div id='guitars-page-links-wrapper'>
                    <Link to='/'>Home</Link>  &nbsp;  &gt; &nbsp;Electric Guitars
                </div>
            </div>

            <h1 id='guitars-page-title'>Electric Guitars </h1>

            {allRows.map((row, indexGuitars)=>{
                    return(
                        <div id='realGenWrap' key={indexGuitars}>
                             <RealGenericCarousel key={indexGuitars} row={row} rowId={indexGuitars}/>
                         </div>   
                       
                    )
                })}

        </div>
    )
}

export default Guitars