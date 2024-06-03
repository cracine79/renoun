import { BsSearch } from "react-icons/bs";
import './Search.css'
import { useSelector } from "react-redux";
import { useState } from "react";

function Search(){

    const instruments = useSelector(state => Object.values(state.instruments))
    let keyWords = []
   
  
    instruments.forEach((instrument)=>{

        if(!keyWords.includes(instrument.itemName)){
            keyWords.push(instrument.itemName)
        }
        if (!keyWords.includes(instrument.brand)){
            keyWords.push(instrument.brand)
        }
        if (!keyWords.includes(instrument.model)){
            keyWords.push(instrument.model)
        }
    }  
)
const handleSearchSubmit = ()=>{

}

let keyWordsHolder = keyWords
const [searchPrompts, setSearchPrompts] = useState(keyWords)

keyWordsHolder.sort()

const handleChange = (e) => {
 
    const dropDown = document.getElementById('search-results-box')
    if(e.target.value===''){
        dropDown.style.display='none'
    } else {
        dropDown.style.display='block'
        keyWordsHolder=[]
 
       keyWords.forEach((word)=>{

            if (word.toLowerCase().slice(0, e.target.value.length) === (e.target.value.toLowerCase())){
                keyWordsHolder.push(word)
            }      
        })
    debugger;
    
    }
    setSearchPrompts(keyWordsHolder)
 
}
    return(
        <>
             <form id='searchWrapper' onSubmit={handleSearchSubmit}>
                <input type='text' id='searchbar' placeholder="Shop for used & new music gear" onChange={handleChange}/>
                <div id='submit-wrapper'>
                <input type='submit' id='searchButton' value= ""/>
                    <div id='bsSearch-wrapper'>
                    <BsSearch />
                        </div>

                </div>
            
               

                <div id='search-results-box'>
                {searchPrompts.map((word)=>{
                    return(
                        <>
                           <p className='searchOption'>
                           {word}
                            </p> 
                        </>
                    )
                   
                    
                })}


                </div>
             
            </form>
        </>
    )
}

export default Search