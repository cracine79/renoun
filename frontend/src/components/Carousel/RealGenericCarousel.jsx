import { formatter } from "./GenericCarousel"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { deleteFavorite, createFavorite } from "../../store/favorite"
import { useEffect } from "react"
import './RealGenericCarousel.css'


function RealGenericCarousel({row, rowId}){

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
        favoriteInstruments.push(row[id-1])
    })

        useEffect(()=>{
            const ioMdHeartOne = document.getElementById(`realGenIoMdHeart1_${rowId}`)
            const ioMdHeartTwo = document.getElementById(`realGenIoMdHeart2_${rowId}`)
            const ioMdHeartThree = document.getElementById(`realGenIoMdHeart3_${rowId}`)
            const ioMdHeartFour = document.getElementById(`realGenIoMdHeart4_${rowId}`)
            const ioMdHeartFive = document.getElementById(`realGenIoMdHeart5_${rowId}`)
            const ioMdHeartSix = document.getElementById(`realGenIoMdHeart6_${rowId}`)
        
            const luHeartOne = document.getElementById(`realGenLuHeart1_${rowId}`)
            const luHeartTwo = document.getElementById(`realGenLuHeart2_${rowId}`)
            const luHeartThree = document.getElementById(`realGenLuHeart3_${rowId}`)
            const luHeartFour = document.getElementById(`realGenLuHeart4_${rowId}`)
            const luHeartFive = document.getElementById(`realGenLuHeart5_${rowId}`)
            const luHeartSix = document.getElementById(`realGenLuHeart6_${rowId}`)
           
        
            if(row[0]){
                if (favoriteInstrumentIds.includes(row[0].id)){
                    ioMdHeartOne.style.display='none'
                    luHeartOne.style.display='flex'
                } else {
                    ioMdHeartOne.style.display='flex'
                    luHeartOne.style.display='none'
                }
        
    
            }
         
            if(row[1]){
                if (favoriteInstrumentIds.includes(row[1].id)){
                    ioMdHeartTwo.style.display='none'
                    luHeartTwo.style.display='flex'
                } else {
                    ioMdHeartTwo.style.display='flex'
                    luHeartTwo.style.display='none'
                }
            }
          
            if(row[2]){
                if (favoriteInstrumentIds.includes(row[2].id)){
                    ioMdHeartThree.style.display='none'
                    luHeartThree.style.display='flex'
                } else {
                    ioMdHeartThree.style.display='flex'
                    luHeartThree.style.display='none'
                }
            }
        
            if(row[3]){
                if (favoriteInstrumentIds.includes(row[3].id)){
                    ioMdHeartFour.style.display='none'
                    luHeartFour.style.display='flex'
                } else {
                    ioMdHeartFour.style.display='flex'
                    luHeartFour.style.display='none'
                }
            }
           
            if(row[4]){
                if (favoriteInstrumentIds.includes(row[4].id)){
                    ioMdHeartFive.style.display='none'
                    luHeartFive.style.display='flex'
                } else {
                    ioMdHeartFive.style.display='flex'
                    luHeartFive.style.display='none'
                }
        
            }
           
            if(row[5]){
                if (favoriteInstrumentIds.includes(row[5].id)){
                    ioMdHeartSix.style.display='none'
                    luHeartSix.style.display='flex'
                } else {
                    ioMdHeartSix.style.display='flex'
                    luHeartSix.style.display='none'
                }
        
            }
           
           
        
        },[favoritesObj])


        const addFavorite = (instrumentId, buttonId, e) => {
            
            const emptyHeart = document.getElementById(`realGenLuHeart${buttonId}_${rowId}`)
           
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
            if (row[0]){
                return(
                    <>
                        <div className='thumb-instrumentWrapper'>
                            <div className='carousel-fav-button'>
                                    <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart1_${rowId}`} onClick={(e)=> addFavorite(row[0].id, 1, e)}></div>  
                                    <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`realGenLuHeart1_${rowId}`} onClick={(e)=> unFavorite(row[0].id, 1, e)}> </div>
                            </div>      
                
                
                        <Link className='thumb-link' to={`/instruments/${row[0].id}`}>
                   
                   
                            <ul id='thumb-dets'>
                                <img key ={`img${row[0].id}`}className='thumb-instrumentImage' src={row[0].photoUrl} />
                                <div key ={`wrap${row[0].id}`}className='words-wrap'>
                                    <div key ={`instName${row[0].id}`}className='thumb-instrumentName'>{row[0].itemName}</div>
                                    <li key ={`condition${row[0].id}`} className='thumb-condition'>{row[0].condition}</li>
                                    <li key ={`price${row[0].id}`}className='thumb-price'>{formatter.format(row[0].price)}</li>
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
            if (row[1]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart2_${rowId}`} onClick={(e)=> addFavorite(row[1].id, 2, e)}> </div> 
                        <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`realGenLuHeart2_${rowId}`} onClick={(e)=> unFavorite(row[1].id, 2, e)}> </div>
                    </div>
                
                
                <Link className='thumb-link' to={`/instruments/${row[1].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${row[1].id}`}className='thumb-instrumentImage' src={row[1].photoUrl} />
                        <div key ={`wrap${row[1].id}`}className='words-wrap'>
                            <div key ={`instName${row[1].id}`}className='thumb-instrumentName'>{row[1].itemName}</div>
                            <li key ={`condition${row[1].id}`} className='thumb-condition'>{row[1].condition}</li>
                            <li key ={`price${row[1].id}`}className='thumb-price'>{formatter.format(row[1].price)}</li>
                        </div>
                    </ul>
                    
                </Link>
            </div>
                    </>
                )
            }
        }
        const InstrumentThree = () => {
            if (row[2]){
                return(
                    <>
                        <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart3_${rowId}`} onClick={(e)=> addFavorite(row[2].id, 3, e)}> </div>  
                        <div src="/assets/images/filledHeart.png"  className = 'likeOff' id={`realGenLuHeart3_${rowId}`} onClick={(e)=> unFavorite(row[2].id, 3, e)}> </div>
                    </div>
                
                
                <Link className='thumb-link' to={`/instruments/${row[2].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${row[2].id}`}className='thumb-instrumentImage' src={row[2].photoUrl} />
                        <div key ={`wrap${row[2].id}`}className='words-wrap'>
                            <div key ={`instName${row[2].id}`}className='thumb-instrumentName'>{row[2].itemName}</div>
                            <li key ={`condition${row[2].id}`} className='thumb-condition'>{row[2].condition}</li>
                            <li key ={`price${row[2].id}`}className='thumb-price'>{formatter.format(row[2].price)}</li>
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
            if (row[3]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart4_${rowId}`} onClick={(e)=> addFavorite(row[3].id, 4, e)}>  </div> 
                        <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`realGenLuHeart4_${rowId}`} onClick={(e)=> unFavorite(row[3].id, 4, e)}> </div>
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${row[3].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${row[3].id}`}className='thumb-instrumentImage' src={row[3].photoUrl} />
                        <div key ={`wrap${row[3].id}`}className='words-wrap'>
                            <div key ={`instName${row[3].id}`}className='thumb-instrumentName'>{row[3].itemName}</div>
                            <li key ={`condition${row[3].id}`} className='thumb-condition'>{row[3].condition}</li>
                            <li key ={`price${row[3].id}`}className='thumb-price'>{formatter.format(row[3].price)}</li>
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
            if (row[4]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart5_${rowId}`} onClick={(e)=> addFavorite(row[4].id, 5, e)}>  </div> 
                        <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`realGenLuHeart5_${rowId}`} onClick={(e)=> unFavorite(row[4].id, 5, e)}> </div>
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${row[4].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${row[4].id}`}className='thumb-instrumentImage' src={row[4].photoUrl} />
                        <div key ={`wrap${row[4].id}`}className='words-wrap'>
                            <div key ={`instName${row[4].id}`}className='thumb-instrumentName'>{row[4].itemName}</div>
                            <li key ={`condition${row[4].id}`} className='thumb-condition'>{row[4].condition}</li>
                            <li key ={`price${row[4].id}`}className='thumb-price'>{formatter.format(row[4].price)}</li>
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
            if (row[5]){
                return(
                    <>
                         <div className='thumb-instrumentWrapper'>
                 <div className='carousel-fav-button'>
                        <div src='/assets/images/emptyHeart.png' className = 'likeOn' id={`realGenIoMdHeart6_${rowId}`} onClick={(e)=> addFavorite(row[5].id, 6, e)}> </div> 
                        <div src="/assets/images/filledHeart.png"   className = 'likeOff' id={`realGenLuHeart6_${rowId}`} onClick={(e)=> unFavorite(row[5].id, 6, e)}> </div>
                </div>
                
                
                <Link className='thumb-link' to={`/instruments/${row[5].id}`}>
                   
                   
                    <ul id='thumb-dets'>
                        <img key ={`img${row[5].id}`}className='thumb-instrumentImage' src={row[5].photoUrl} />
                        <div key ={`wrap${row[5].id}`}className='words-wrap'>
                            <div key ={`instName${row[5].id}`}className='thumb-instrumentName'>{row[5].itemName}</div>
                            <li key ={`condition${row[5].id}`} className='thumb-condition'>{row[5].condition}</li>
                            <li key ={`price${row[5].id}`}className='thumb-price'>{formatter.format(row[5].price)}</li>
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
        <div className='realGenCarouselWrapper'>
             <InstrumentOne />
              <InstrumentTwo />
              <InstrumentThree />
              <InstrumentFour />
              <InstrumentFive />
              <InstrumentSix />

        </div>
            

        </>
    )
}

export default RealGenericCarousel