import { useSelector } from "react-redux"
import './GuitarsCarousel.css'
import { Link } from "react-router-dom"

import { useEffect } from "react"

import { useDispatch } from "react-redux"
import { createFavorite, deleteFavorite } from "../../store/favorite"



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function GenericCarousel(){
    
    const instrumentsObj = useSelector(state=>(state.instruments))
    const instruments = Object.values(instrumentsObj)
    const currentUser = useSelector(state=>(state.session.user))
    if (currentUser){
        const userId = currentUser.id
    }
    const dispatch = useDispatch()
    
    

        const favoritesObj = useSelector(state=>(state.favorites))
        const favorites = Object.values(favoritesObj)
        const favoriteInstrumentIds = favorites.map((favorite)=>{
            return favorite.instrumentId
        })
        debugger;
        const favoriteInstruments = []
        favoriteInstrumentIds.forEach((id)=>{
            favoriteInstruments.push(instruments[id-1])
        })
    
      

    
    const shortInstruments = favoriteInstruments.slice(0,6)
    const addFavorite = (instrumentId, buttonId, e) => {
            
        const emptyHeart = document.getElementById(`luHeart${buttonId}`)
            e.target.style.display='none'
            emptyHeart.style.display='flex'
            const favorite = {
                instrumentId,
                favoriterId: currentUser.id
            }
        
            dispatch(createFavorite(favorite))
    
        }
        
        const InstrumentOne = () => {
            if (shortInstruments[0]){
                return(
                    <>
                        <div className='thumb-instrumentWrapper'>
                            <div className='carousel-fav-button'>
                                    <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='IoMdHeart1' onClick={(e)=> addFavorite(shortInstruments[0].id, 1, e)} />  
                                    <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='LuHeart1'onClick={(e)=> unFavorite(shortInstruments[0].id, 1, e)} /> 
                            </div>      
                
                
                        <Link className='thumb-link' to={`/instruments/${shortInstruments[0].id}`}>
                   
                   
                            <ul id='thumb-dets'>
                                <img key ={`img${shortInstruments[0].id}`}className='thumb-instrumentImage' src={shortInstruments[0].photoUrl} />
                                <div key ={`wrap${shortInstruments[0].id}`}className='words-wrap'>
                                    <div key ={`instName${shortInstruments[0].id}`}className='thumb-instrumentName'>{shortInstruments[0].itemName}</div>
                                    <li key ={`condition${shortInstruments[0].id}`} className='thumb-condition'>{shortInstruments[0].condition}</li>
                                    <li key ={`price${shortInstruments[0].id}`}className='thumb-price'>{formatter.format(shortInstruments[0].price)}</li>
                                </div>
                            </ul>
                            
                        </Link>
            </div>
                    </>
                )
            } else { return (<>
            </>)}
        }

        const InstrumentTwo = () => {
            if (shortInstruments[1]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart2' onClick={(e)=> addFavorite(shortInstruments[1].id, 2, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='luHeart2'onClick={(e)=> unFavorite(shortInstruments[1].id, 2, e)}/> 
                    </div>
                
                
                <Link className='thumb-link' to={`/instruments/${shortInstruments[1].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${shortInstruments[1].id}`}className='thumb-instrumentImage' src={shortInstruments[1].photoUrl} />
                        <div key ={`wrap${shortInstruments[1].id}`}className='words-wrap'>
                            <div key ={`instName${shortInstruments[1].id}`}className='thumb-instrumentName'>{shortInstruments[1].itemName}</div>
                            <li key ={`condition${shortInstruments[1].id}`} className='thumb-condition'>{shortInstruments[1].condition}</li>
                            <li key ={`price${shortInstruments[1].id}`}className='thumb-price'>{formatter.format(shortInstruments[1].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
                    </>
                )
            }
        }
    
        const InstrumentThree = () => {
            if (shortInstruments[2]){
                return(
                    <>
                        <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart3' onClick={(e)=> addFavorite(shortInstruments[2].id, 3, e)}/>  
                        <img src="../../assets/images/filledHeart.png"  className = 'likeOff' id='luHeart3'onClick={(e)=> unFavorite(shortInstruments[2].id, 3, e)}/> 
                    </div>
                
                
                <Link className='thumb-link' to={`/instruments/${shortInstruments[2].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${shortInstruments[2].id}`}className='thumb-instrumentImage' src={shortInstruments[2].photoUrl} />
                        <div key ={`wrap${shortInstruments[2].id}`}className='words-wrap'>
                            <div key ={`instName${shortInstruments[2].id}`}className='thumb-instrumentName'>{shortInstruments[2].itemName}</div>
                            <li key ={`condition${shortInstruments[2].id}`} className='thumb-condition'>{shortInstruments[2].condition}</li>
                            <li key ={`price${shortInstruments[2].id}`}className='thumb-price'>{formatter.format(shortInstruments[2].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
                    </>
                )
            } else {
                return(
                    <></>
                )
            }
        }
    
    
        const InstrumentFour = () => {
            if (shortInstruments[3]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart4' onClick={(e)=> addFavorite(shortInstruments[3].id, 4, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='luHeart4'onClick={(e)=> unFavorite(shortInstruments[3].id, 4, e)}/> 
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${shortInstruments[3].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${shortInstruments[3].id}`}className='thumb-instrumentImage' src={shortInstruments[3].photoUrl} />
                        <div key ={`wrap${shortInstruments[3].id}`}className='words-wrap'>
                            <div key ={`instName${shortInstruments[3].id}`}className='thumb-instrumentName'>{shortInstruments[3].itemName}</div>
                            <li key ={`condition${shortInstruments[3].id}`} className='thumb-condition'>{shortInstruments[3].condition}</li>
                            <li key ={`price${shortInstruments[3].id}`}className='thumb-price'>{formatter.format(shortInstruments[3].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
                    </>
                )
            } else { 
                return <></>
            }
        }
     
        const InstrumentFive = () =>{
            if (shortInstruments[4]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart5' onClick={(e)=> addFavorite(shortInstruments[4].id, 5, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='luHeart5'onClick={(e)=> unFavorite(shortInstruments[4].id, 5, e)}/> 
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${shortInstruments[4].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${shortInstruments[4].id}`}className='thumb-instrumentImage' src={shortInstruments[4].photoUrl} />
                        <div key ={`wrap${shortInstruments[4].id}`}className='words-wrap'>
                            <div key ={`instName${shortInstruments[4].id}`}className='thumb-instrumentName'>{shortInstruments[4].itemName}</div>
                            <li key ={`condition${shortInstruments[4].id}`} className='thumb-condition'>{shortInstruments[4].condition}</li>
                            <li key ={`price${shortInstruments[4].id}`}className='thumb-price'>{formatter.format(shortInstruments[4].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
                    </>
                )
            } else {
                return(<></>)
            }
        }
    
        const InstrumentSix = () => {
            if (shortInstruments[5]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart6' onClick={(e)=> addFavorite(shortInstruments[5].id, 6, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='luHeart6'onClick={(e)=> unFavorite(shortInstruments[5].id, 6, e)}/> 
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${shortInstruments[5].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${shortInstruments[5].id}`}className='thumb-instrumentImage' src={shortInstruments[5].photoUrl} />
                        <div key ={`wrap${shortInstruments[5].id}`}className='words-wrap'>
                            <div key ={`instName${shortInstruments[5].id}`}className='thumb-instrumentName'>{shortInstruments[5].itemName}</div>
                            <li key ={`condition${shortInstruments[5].id}`} className='thumb-condition'>{shortInstruments[5].condition}</li>
                            <li key ={`price${shortInstruments[5].id}`}className='thumb-price'>{formatter.format(shortInstruments[5].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
    
                    </>
                )
            }
        }
       



    return(
      <>
  
      <InstrumentOne />
      <InstrumentTwo />
      <InstrumentThree />
      <InstrumentFour />
      <InstrumentFive />
      <InstrumentSix />
      </>
 
    )
}

export default GenericCarousel