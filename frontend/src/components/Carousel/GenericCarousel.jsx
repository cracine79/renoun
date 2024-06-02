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
     
        const favoriteInstruments = []
        favoriteInstrumentIds.forEach((id)=>{
            favoriteInstruments.push(instruments[id-1])
        })
    
      

    
    const shortInstruments = favoriteInstruments.slice(0,6)

    useEffect(()=>{

        const ioMdHeartOne = document.getElementById('genIoMdHeart1')
        const ioMdHeartTwo = document.getElementById('genIoMdHeart2')
        const ioMdHeartThree = document.getElementById('genIoMdHeart3')
        const ioMdHeartFour = document.getElementById('genIoMdHeart4')
        const ioMdHeartFive = document.getElementById('genIoMdHeart5')
        const ioMdHeartSix = document.getElementById('genIoMdHeart6')
    
        const luHeartOne = document.getElementById('genLuHeart1')
        const luHeartTwo = document.getElementById('genLuHeart2')
        const luHeartThree = document.getElementById('genLuHeart3')
        const luHeartFour = document.getElementById('genLuHeart4')
        const luHeartFive = document.getElementById('genLuHeart5')
        const luHeartSix = document.getElementById('genLuHeart6')
    
        if(shortInstruments[0]){
            if (favoriteInstrumentIds.includes(shortInstruments[0].id)){
                ioMdHeartOne.style.display='none'
                luHeartOne.style.display='flex'
            } else {
                ioMdHeartOne.style.display='flex'
                luHeartOne.style.display='none'
            }
    

        }
     
        if(shortInstruments[1]){
            if (favoriteInstrumentIds.includes(shortInstruments[1].id)){
                ioMdHeartTwo.style.display='none'
                luHeartTwo.style.display='flex'
            } else {
                ioMdHeartTwo.style.display='flex'
                luHeartTwo.style.display='none'
            }
        }
      
        if(shortInstruments[2]){
            if (favoriteInstrumentIds.includes(shortInstruments[2].id)){
                ioMdHeartThree.style.display='none'
                luHeartThree.style.display='flex'
            } else {
                ioMdHeartThree.style.display='flex'
                luHeartThree.style.display='none'
            }
        }
    
        if(shortInstruments[3]){
            if (favoriteInstrumentIds.includes(shortInstruments[3].id)){
                ioMdHeartFour.style.display='none'
                luHeartFour.style.display='flex'
            } else {
                ioMdHeartFour.style.display='flex'
                luHeartFour.style.display='none'
            }
        }
       
        if(shortInstruments[4]){
            if (favoriteInstrumentIds.includes(shortInstruments[4].id)){
                ioMdHeartFive.style.display='none'
                luHeartFive.style.display='flex'
            } else {
                ioMdHeartFive.style.display='flex'
                luHeartFive.style.display='none'
            }
    
        }
       
        if(shortInstruments[5]){
            if (favoriteInstrumentIds.includes(shortInstruments[5].id)){
                ioMdHeartSix.style.display='none'
                luHeartSix.style.display='flex'
            } else {
                ioMdHeartSix.style.display='flex'
                luHeartSix.style.display='none'
            }
    
        }
       
       
    
    },[favoritesObj])



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

        const unFavorite = async (instrumentId, buttonId, e) => {
            // const filledHeart = document.getElementById(`ioMdHeart${buttonId}`)
            // e.target.style.display='none'
            // filledHeart.style.display='flex'
            let favoriteId
         
            favorites.forEach((favorite)=>{
               
                if(favorite.instrumentId === instrumentId){
                    favoriteId = favorite.id
                }
     
         
            })
            await dispatch (deleteFavorite(favoriteId))

       
           
           
          
        }
        
        const InstrumentOne = () => {
            if (shortInstruments[0]){
                return(
                    <>
                        <div className='thumb-instrumentWrapper'>
                            <div className='carousel-fav-button'>
                                    <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart1' onClick={(e)=> addFavorite(shortInstruments[0].id, 1, e)} />  
                                    <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='genLuHeart1'onClick={(e)=> unFavorite(shortInstruments[0].id, 1, e)} /> 
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
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart2' onClick={(e)=> addFavorite(shortInstruments[1].id, 2, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='genLuHeart2'onClick={(e)=> unFavorite(shortInstruments[1].id, 2, e)}/> 
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
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart3' onClick={(e)=> addFavorite(shortInstruments[2].id, 3, e)}/>  
                        <img src="../../assets/images/filledHeart.png"  className = 'likeOff' id='genLuHeart3'onClick={(e)=> unFavorite(shortInstruments[2].id, 3, e)}/> 
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
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart4' onClick={(e)=> addFavorite(shortInstruments[3].id, 4, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='genLuHeart4'onClick={(e)=> unFavorite(shortInstruments[3].id, 4, e)}/> 
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
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart5' onClick={(e)=> addFavorite(shortInstruments[4].id, 5, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='genLuHeart5'onClick={(e)=> unFavorite(shortInstruments[4].id, 5, e)}/> 
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
                        <img src='../../assets/images/emptyHeart.png' className = 'likeOn' id='genIoMdHeart6' onClick={(e)=> addFavorite(shortInstruments[5].id, 6, e)}/>  
                        <img src="../../assets/images/filledHeart.png"   className = 'likeOff' id='genLuHeart6'onClick={(e)=> unFavorite(shortInstruments[5].id, 6, e)}/> 
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