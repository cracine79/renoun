// import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Instrument.css'
import { LuHeart } from "react-icons/lu"
import { Link } from 'react-router-dom';

const Instrument = () => {
    const instrumentId = 1;
    const instrument = useSelector(state=>(state.instruments[1]))
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