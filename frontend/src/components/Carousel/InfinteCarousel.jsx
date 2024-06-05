import { formatter } from "./GuitarsCarousel"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { createFavorite, deleteFavorite } from "../../store/favorite"
import './InfiniteCarousel.css'

function InfiniteCarousel({instrumentsObj, index}){
    const dispatch = useDispatch()
    const instruments = Object.values(instrumentsObj)
    const currentUser = useSelector(state=>state.session.user)
    const orders = useSelector(state=>state.orders)
    const favoritesObj = useSelector(state=>(state.favorites))
    const favorites = Object.values(favoritesObj)
    const favoriteInstrumentIds = favorites.map((favorite)=>{
        return favorite.instrumentId
    })
   
   
    const availableInstruments = instruments.filter((instrument)=>instrument.available===true)

    useEffect(()=>{
        const availableInstruments = instruments.filter((instrument)=>instrument.available===true)
    }, [orders.length])
    const ioHearts = [];
    const luHearts = []
    useEffect(()=>{
        let i = 1
        debugger;
        while (i <= availableInstruments.length){
            debugger;
            ioHearts[i]= document.getElementById(`ioMdHeart${i}_${index}`)
            luHearts[i] = document.getElementById(`luHeart${i}_${index}`)
            if(instruments[i] && ioHearts[i]){
                if (favoriteInstrumentIds.includes(instruments[i-1].id)){
                    ioHearts[i].style.display='none'
                    luHearts[i].style.display='flex'
                } else {
                    ioHearts[i].style.display='flex'
                    luHearts[i].style.display='none'
                }

            }
          
            i+=1
        }
    }, [favoritesObj])

    const addFavorite = (instrumentId, buttonId, e) =>{
        const favorite = {
            instrumentId,
            favoriterId: currentUser.id
        }
    
        dispatch(createFavorite(favorite))
    }

    const unFavorite = (instrumentId, buttonId, e) =>{
        let favoriteId
        debugger;
         
        favorites.forEach((favorite)=>{

            if(favorite.instrumentId === instrumentId){
                favoriteId = favorite.id
            }

     
        })
        dispatch (deleteFavorite(favoriteId))

    }


    return(
        <>
        <div id='if-wrap-wrap'>
        <div id='infinite-carousel-wrap'>
        {availableInstruments.map((instrument)=>{
            const pos = instruments.indexOf(instrument)+1
            return(
             

                <div className='thumb-instrumentWrapper'>
                    <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`ioMdHeart${pos}_${index}`} onClick={(e)=> addFavorite(instruments[pos-1].id, pos, e)} ></div>  
                        <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`luHeart${pos}_${index}`} onClick={(e)=> unFavorite(instruments[pos-1].id, pos, e)} > </div>
                    </div>
            
            
            <Link className='thumb-link' to={`/instruments/${instruments[pos-1].id}`}>
               
               
                <ul id='thumb-dets'>
                    <img key ={`img${instruments[pos-1].id}`}className='thumb-instrumentImage' src={instruments[pos-1].photoUrl} />
                    <div key ={`wrap${instruments[pos-1].id}`}className='words-wrap'>
                        <div key ={`instName${instruments[pos-1].id}`}className='thumb-instrumentName'>{instruments[pos-1].itemName}</div>
                        <li key ={`condition${instruments[pos-1].id}`} className='thumb-condition'>{instruments[pos-1].condition}</li>
                        <li key ={`price${instruments[pos-1].id}`}className='thumb-price'>{formatter.format(instruments[pos-1].price)}</li>
                    </div>
                </ul>
                
            </Link>
        </div>
                
              
            )
        })}

        </div>
       

            
        </div>
        
            
        
        </>
    )
}

export default InfiniteCarousel