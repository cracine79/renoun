import { BsSearch } from "react-icons/bs";
import './Search.css'
import { useSelector } from "react-redux";
import { useState } from "react";

function Search(){
    const [query, setQuery] = useState('');
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
        keyWords.filter((word)=>{
            word.toLowerCase().includes(query.toLowerCase())
        })
  
keyWords.sort()
    return(
        <>
             <div id='searchWrapper'>
                <input type='text' id='searchbar' value={query} placeholder="Shop for used & new music gear" onChange={(e)=>setQuery(e.target.value)}/>
                <div id='searchButton'>
                    <BsSearch />
                </div>

                <div id='search-results-box'>
                {keyWords.map((word)=>{
                    return(
                        <>
                           <p>
                           {word}
                            </p> 
                        </>
                    )
                   
                    
                })}


                </div>
             
            </div>
        </>
    )
}

export default Search