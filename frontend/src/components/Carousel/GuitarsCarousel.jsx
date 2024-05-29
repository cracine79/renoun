import { useSelector } from "react-redux"
import './GuitarsCarousel.css'
import { Link } from "react-router-dom"
import { LuHeart } from "react-icons/lu"

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function GuitarsCarousel(){

    const guitars = useSelector(state=>Object.values(state.instruments))


 
    return<>
    <div className='carousel'>

    <h2 className='carousel-header'>Recently Viewed</h2>
    <div className='instrumentWrapperWrapper'>
    {guitars.map((guitar)=>{ return(
        <div key ={`listing_${guitar.id}`} className='thumb-instrumentWrapper'>
            <Link className='thumb-link' to={`/instruments/${guitar.id}`}>
                <div className='like'>
                    <LuHeart /> 
                </div>
                <ul id='thumb-dets'>
                    <img key ={`img${guitar.id}`}className='thumb-instrumentImage' src={guitar.photoUrl} />
                    <div key ={`wrap${guitar.id}`}className='words-wrap'>
                        <div key ={`instName${guitar.id}`}className='thumb-instrumentName'>{guitar.itemName}</div>
                        <li key ={`condition${guitar.id}`} className='thumb-condition'>{guitar.condition}</li>
                        <li key ={`price${guitar.id}`}className='thumb-price'>{formatter.format(guitar.price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>)
    })}
    </div>
    

    </div>

    </>

}

export default GuitarsCarousel