import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './Outcomes.css'
import RealGenericCarousel from "../Carousel/RealGenericCarousel";


function Outcomes(){
    const location=useLocation();
    const {searchWord} = location.state
    const instruments = useSelector(state => Object.values(state.instruments))
    const searchResults = [];
    instruments.forEach((instrument)=>{
      if(instrument.available){
        if(instrument.itemName.toLowerCase().includes(searchWord.toLowerCase()) ||
        (instrument.model) && instrument.model.toLowerCase().includes(searchWord.toLowerCase()) ||
        instrument.brand.toLowerCase().includes(searchWord.toLowerCase()) ||
        instrument.category.toLowerCase().includes(searchWord.toLowerCase())){
            searchResults.push(instrument)
        }
      }
    })

    let rowRequirement
   if(searchResults.length%6===0){
    rowRequirement = searchResults.length/6
   } else {
    rowRequirement = Math.floor(searchResults.length/6)+1
   }
   console.log(rowRequirement)

   let i=0
   let allRows = []

   while(i<rowRequirement){
  
    let row = searchResults.slice((i*6+0),(i*6+6))
    allRows.push(row)
    i+=1
   }

   console.log(allRows)

    return(
        <div id='search-results-wrapper-wrapper'>
            <div id='search-results-wrapper'>
                <h1 id='results-count'>{searchResults.length} Results <span id='searchTermWrap'>for "{`${searchWord}`}"</span></h1>
                {allRows.map((row)=>{
                    return(
                        <div id='favs-row-wrapper'>
                              <RealGenericCarousel row={row} rowId={row[0].id}/>
                        </div>
                      
                    )
                })}
            </div>
        </div>
        
    )
}

export default Outcomes