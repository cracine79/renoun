import { useSelector } from "react-redux"
import './GuitarsCarousel.css'
import { Link } from "react-router-dom"
import { LuHeart } from "react-icons/lu"

function GuitarsCarousel(){

    const guitars = useSelector(state=>Object.values(state.instruments))

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
 
    return<>
    <div className='carousel'>

    <h2 className='carousel-header'>Recently Viewed</h2>
    <div className='instrumentWrapperWrapper'>
    {guitars.map((guitar)=>{ return(
        <div className='thumb-instrumentWrapper'>
            <Link className='thumb-link' to='/instrument'>
                <div className='like'>
                    <LuHeart /> 
                </div>
                <ul id='thumb-dets'>
                    <img className='thumb-instrumentImage' src={guitar.photoUrl} />
                    <div className='thumb-instrumentName'>{guitar.itemName}</div>
                    <li className='thumb-condition'>{guitar.condition}</li>
                    <li className='thumb-price'>{formatter.format(guitar.price)}</li>
                </ul>
                
            </Link>
        </div>)
    })}
    </div>
    

    </div>

    </>

}

export default GuitarsCarousel