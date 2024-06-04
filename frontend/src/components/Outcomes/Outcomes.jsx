import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


function Outcomes(){
    const location=useLocation();
    const {searchWord} = location.state
    const instruments = useSelector(state => Object.values(state.instruments))
    const searchResults = [];
    instruments.forEach((instrument)=>{
        debugger;
        if(instrument.itemName.toLowerCase().includes(searchWord.toLowerCase()) ||
            instrument.model.toLowerCase().includes(searchWord.toLowerCase()) ||
            instrument.brand.toLowerCase().includes(searchWord.toLowerCase())){
                searchResults.push(instrument)
            }
    })

    console.log(searchResults)


    return(
        <> <p>
                DUDE
            </p>Hello from outcome!</>

        
    )
}

export default Outcomes