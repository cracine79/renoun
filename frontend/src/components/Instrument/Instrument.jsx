// import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Instrument.css'
import { LuHeart } from "react-icons/lu"
import { Link } from 'react-router-dom';

const Instrument = () => {
    const instrumentId = 1;
    const instrument = useSelector(state=>(state.instruments[1]))
    

    let conditionExplanation = ''

    if(instrument.condition==='Brand New'){

    } else if (instrument.condition==='Used - Mint'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else if (instrument.condition === 'Used - Excellent'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else if (instrument.condition === 'Used - Good'){
        conditionExplanation = 'Good condition items function properly but may exhibit some wear and tear.'
    }else if (instrument.condition === 'Used - Poor'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else{
        conditionExplanation = 'Oops!  The condition for this instrument is unavailable!'
    }

    const conditionBox = document.getElementById('condition-box')
    const conditionExplanationBox = document.getElementById('condition-explanation')
    // conditionBox.addEventListener('mouseover', (e) =>{
    //     conditionExplanationBox.style.display='flex';
    // })

    // conditionBox.addEventListener('mouseout', (e) =>{
    //     conditionExplanationBox.style.display='none';
    // })



    return(
        <>
       
        <div id='page-wrapper'>
            <div id='left'>
                <div id='linkbox'>
                    <Link className='instInfoLink' to='/'>Home</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.category}</Link>
                     <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.brand}</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.model}</Link>
                </div>

                <div id='photobox'>
                    <img id= 'photo' src={instrument.photoUrl} />
                    <div className='like' id='biglike'>
                             <LuHeart /> 
                     </div>
                </div>
         
            </div>

            <div id='right'>
                <div id='instrumentInfoBox'>
                    <h1 id='title'>{instrument.itemName}</h1>
                    <div id='condition-explanation-box'>
                        <p id='condition-explanation'>
                            {conditionExplanation}
                        </p>
                    </div>
                    <div id='condition-box'>
                        <p id='condition'>{instrument.condition}</p>
                    </div>



                </div>

            </div>
        </div>
        </>
    )
}

export default Instrument;