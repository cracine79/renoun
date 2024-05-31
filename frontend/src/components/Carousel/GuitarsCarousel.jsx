import { useSelector } from "react-redux"
import './GuitarsCarousel.css'
import { Link } from "react-router-dom"
import { LuHeart } from "react-icons/lu"
import { useEffect } from "react"
import { IoMdHeart } from "react-icons/io";
import { useDispatch } from "react-redux"
import { createFavorite } from "../../store/favorite"


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function GuitarsCarousel(){

    const guitarsObj = useSelector(state=>(state.instruments))
    const guitars = Object.values(guitarsObj)
    const shortGuitars = [];
    const clearHeart = document.getElementById('luHeart')
    const filledHeart = document.getElementById('IoMdHeart')
    const userId = useSelector(state=>(state.session.user.id))
    const dispatch = useDispatch()
    const favoritedObj = useSelector(state=>(state.favorites))

      
        guitars.forEach((guitar)=>{
            if (shortGuitars.length < 6){
                if (guitar.available){
                    shortGuitars.push(guitar)
                }
            }
        })

   
  

 
  
    const addFavorite = (guitarId, e) => {
        const favorite=({
            favoriterId: userId,
            instrumentId: guitarId
        }

        )

        dispatch(createFavorite(favorite))
        if (e.target.style.fill==='red'){
            e.target.style.fill='none'
            e.target.style.stroke='black'
         
        }    else {
            e.target.style.fill='red'
            e.target.style.stroke='none'
        }    
     
                
                
    
    
            console.log('gogo')
            // e.preventDefault();
            // const favorite = {
            //     instrumentId: guitarId,
            //     favoriterId: userId
            // }
            // debugger;
            // dispatch(createFavorite(favorite))
           
    }

            
 

 
    return<>
    <div className='carousel'>

    <h2 className='carousel-header'>Recently Viewed</h2>
    <div className='instrumentWrapperWrapper'>

    <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[0].id, e)} className = 'like' id='luHeart1'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[0].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[0].id}`}className='thumb-instrumentImage' src={shortGuitars[0].photoUrl} />
                    <div key ={`wrap${shortGuitars[0].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[0].id}`}className='thumb-instrumentName'>{shortGuitars[0].itemName}</div>
                        <li key ={`condition${shortGuitars[0].id}`} className='thumb-condition'>{shortGuitars[0].condition}</li>
                        <li key ={`price${shortGuitars[0].id}`}className='thumb-price'>{formatter.format(shortGuitars[0].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>

        <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[1].id, e)} className = 'like' id='luHeart2'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[1].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[1].id}`}className='thumb-instrumentImage' src={shortGuitars[1].photoUrl} />
                    <div key ={`wrap${shortGuitars[1].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[1].id}`}className='thumb-instrumentName'>{shortGuitars[1].itemName}</div>
                        <li key ={`condition${shortGuitars[1].id}`} className='thumb-condition'>{shortGuitars[1].condition}</li>
                        <li key ={`price${shortGuitars[1].id}`}className='thumb-price'>{formatter.format(shortGuitars[1].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>


        <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[2].id, e)} className = 'like' id='luHeart3'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[2].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[2].id}`}className='thumb-instrumentImage' src={shortGuitars[2].photoUrl} />
                    <div key ={`wrap${shortGuitars[2].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[2].id}`}className='thumb-instrumentName'>{shortGuitars[2].itemName}</div>
                        <li key ={`condition${shortGuitars[2].id}`} className='thumb-condition'>{shortGuitars[2].condition}</li>
                        <li key ={`price${shortGuitars[2].id}`}className='thumb-price'>{formatter.format(shortGuitars[2].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>


        <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[3].id, e)} className = 'like' id='luHeart4'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[3].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[3].id}`}className='thumb-instrumentImage' src={shortGuitars[3].photoUrl} />
                    <div key ={`wrap${shortGuitars[3].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[3].id}`}className='thumb-instrumentName'>{shortGuitars[3].itemName}</div>
                        <li key ={`condition${shortGuitars[3].id}`} className='thumb-condition'>{shortGuitars[3].condition}</li>
                        <li key ={`price${shortGuitars[3].id}`}className='thumb-price'>{formatter.format(shortGuitars[3].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>

        <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[4].id, e)} className = 'like' id='luHeart5'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[4].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[4].id}`}className='thumb-instrumentImage' src={shortGuitars[4].photoUrl} />
                    <div key ={`wrap${shortGuitars[4].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[4].id}`}className='thumb-instrumentName'>{shortGuitars[4].itemName}</div>
                        <li key ={`condition${shortGuitars[4].id}`} className='thumb-condition'>{shortGuitars[4].condition}</li>
                        <li key ={`price${shortGuitars[4].id}`}className='thumb-price'>{formatter.format(shortGuitars[4].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>

        <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(shortGuitars[5].id, e)} className = 'like' id='luHeart6'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${shortGuitars[5].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${shortGuitars[5].id}`}className='thumb-instrumentImage' src={shortGuitars[5].photoUrl} />
                    <div key ={`wrap${shortGuitars[5].id}`}className='words-wrap'>
                        <div key ={`instName${shortGuitars[5].id}`}className='thumb-instrumentName'>{shortGuitars[5].itemName}</div>
                        <li key ={`condition${shortGuitars[5].id}`} className='thumb-condition'>{shortGuitars[5].condition}</li>
                        <li key ={`price${shortGuitars[5].id}`}className='thumb-price'>{formatter.format(shortGuitars[5].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>




{/*         
    {shortGuitars.map((guitar)=>{ return(
        <div key ={`listing_${guitar.id}`} className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                   <button onClick={(e)=> addFavorite(guitar.id, e)} className = 'like' id='luHeart'>
                        <LuHeart /> 
                    </button>
                    <div className = 'like' id='IoMdHeart'>
                         <IoMdHeart />
                    </div> 
                </div>
            
            
            <Link className='thumb-link' to={`/instruments/${guitar.id}`}>
               
               
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
    })} */}
    </div>
    

    </div>

    </>

}

export default GuitarsCarousel