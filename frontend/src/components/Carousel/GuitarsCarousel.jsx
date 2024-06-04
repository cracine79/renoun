import { useSelector } from "react-redux"
import './GuitarsCarousel.css'
import { Link } from "react-router-dom"

import { useEffect } from "react"

import { useDispatch } from "react-redux"
import { createFavorite, deleteFavorite } from "../../store/favorite"
// import emptyHeart from '../../assets/images/emptyHeart.png'


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function GuitarsCarousel(){

    const guitarsObj = useSelector(state=>(state.instruments))
    const guitars = Object.values(guitarsObj)
    const orders = useSelector(state=>state.orders)
    
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
    const availableInstruments = guitars.filter((guitar)=>guitar.available===true)
    let shortGuitars = availableInstruments.slice(0,6)


    useEffect(()=>{

        const availInstruments = guitars.filter((guitar)=>guitar.available===true)
        shortGuitars = availInstruments.slice(0,6)
        
    },[orders.length])
      



  


   
useEffect(()=>{

    const ioMdHeartOne = document.getElementById('ioMdHeart1')
    const ioMdHeartTwo = document.getElementById('ioMdHeart2')
    const ioMdHeartThree = document.getElementById('ioMdHeart3')
    const ioMdHeartFour = document.getElementById('ioMdHeart4')
    const ioMdHeartFive = document.getElementById('ioMdHeart5')
    const ioMdHeartSix = document.getElementById('ioMdHeart6')

    const luHeartOne = document.getElementById('luHeart1')
    const luHeartTwo = document.getElementById('luHeart2')
    const luHeartThree = document.getElementById('luHeart3')
    const luHeartFour = document.getElementById('luHeart4')
    const luHeartFive = document.getElementById('luHeart5')
    const luHeartSix = document.getElementById('luHeart6')


    if (favoriteInstrumentIds.includes(shortGuitars[0].id)){
        ioMdHeartOne.style.display='none'
        luHeartOne.style.display='flex'
    } else {
        ioMdHeartOne.style.display='flex'
        luHeartOne.style.display='none'
    }
    if(shortGuitars[1]){
        if (favoriteInstrumentIds.includes(shortGuitars[1].id)){
            ioMdHeartTwo.style.display='none'
            luHeartTwo.style.display='flex'
        } else {
            ioMdHeartTwo.style.display='flex'
            luHeartTwo.style.display='none'
        }
    }
  
    if(shortGuitars[2]){
        if (favoriteInstrumentIds.includes(shortGuitars[2].id)){
            ioMdHeartThree.style.display='none'
            luHeartThree.style.display='flex'
        } else {
            ioMdHeartThree.style.display='flex'
            luHeartThree.style.display='none'
        }
    }

    if(shortGuitars[3]){
        if (favoriteInstrumentIds.includes(shortGuitars[3].id)){
            ioMdHeartFour.style.display='none'
            luHeartFour.style.display='flex'
        } else {
            ioMdHeartFour.style.display='flex'
            luHeartFour.style.display='none'
        }
    }
   
    if(shortGuitars[4]){
        if (favoriteInstrumentIds.includes(shortGuitars[4].id)){
            ioMdHeartFive.style.display='none'
            luHeartFive.style.display='flex'
        } else {
            ioMdHeartFive.style.display='flex'
            luHeartFive.style.display='none'
        }

    }
   
    if(shortGuitars[5]){
        if (favoriteInstrumentIds.includes(shortGuitars[5].id)){
            ioMdHeartSix.style.display='none'
            luHeartSix.style.display='flex'
        } else {
            ioMdHeartSix.style.display='flex'
            luHeartSix.style.display='none'
        }

    }
   
   

},[favoritesObj])
    
 
  
    const addFavorite = (guitarId, buttonId, e) => {
            
        // const emptyHeart = document.getElementById(`luHeart${buttonId}`)
        //     e.target.style.display='none'
        //     emptyHeart.style.display='flex'

           
 
            const favorite = {
                instrumentId: guitarId,
                favoriterId: currentUser.id
            }
        
            dispatch(createFavorite(favorite))
    
        }

        
        
        const unFavorite = async (guitarId, buttonId, e) => {
            // const filledHeart = document.getElementById(`ioMdHeart${buttonId}`)
            // e.target.style.display='none'
            // filledHeart.style.display='flex'
            let favoriteId
         
            favorites.forEach((favorite)=>{
    
                if(favorite.instrumentId === guitarId){
                    favoriteId = favorite.id
                }

         
            })
            await dispatch (deleteFavorite(favoriteId))

       
           
           
          
        }

        // console.log(favoriteInstrumentIds)
  

        // )

       
        // if (e.target.style.fill==='red'){
        //     e.target.style.fill='none'
        //     e.target.style.stroke='black'
         
        // }    else {
          
        // }    
     
                
                
    
    
        //     console.log('gogo')
            // e.preventDefault();
            // const favorite = {
            //     instrumentId: guitarId,
            //     favoriterId: userId
            // }
            
            // dispatch(createFavorite(favorite))
           
    // }
  
    const InstrumentOne = () => {
        if (shortGuitars[0]){
            return(
                <>
                    <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart1' onClick={(e)=> addFavorite(shortGuitars[0].id, 1, e)} />  
                    <img src="/assets/images/filledHeart.png"   className = 'likeOff' id='luHeart1'onClick={(e)=> unFavorite(shortGuitars[0].id, 1, e)} /> 
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
                </>
            )
        } else { return (<>
        </>)}
    }

    const InstrumentTwo = () => {
        if (shortGuitars[1]){
            return(
                <>
                     <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart2' onClick={(e)=> addFavorite(shortGuitars[1].id, 2, e)}/>  
                    <img src="/assets/images/filledHeart.png"   className = 'likeOff' id='luHeart2'onClick={(e)=> unFavorite(shortGuitars[1].id, 2, e)}/> 
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
                </>
            )
        }
    }

    const InstrumentThree = () => {
        if (shortGuitars[2]){
            return(
                <>
                    <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart3' onClick={(e)=> addFavorite(shortGuitars[2].id, 3, e)}/>  
                    <img src="/assets/images/filledHeart.png"  className = 'likeOff' id='luHeart3'onClick={(e)=> unFavorite(shortGuitars[2].id, 3, e)}/> 
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
                </>
            )
        } else {
            return(
                <></>
            )
        }
    }


    const InstrumentFour = () => {
        if (shortGuitars[3]){
            return(
                <>
                     <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart4' onClick={(e)=> addFavorite(shortGuitars[3].id, 4, e)}/>  
                    <img src="/assets/images/filledHeart.png"   className = 'likeOff' id='luHeart4'onClick={(e)=> unFavorite(shortGuitars[3].id, 4, e)}/> 
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
                </>
            )
        } else { 
            return <></>
        }
    }
 
    const InstrumentFive = () =>{
        if (shortGuitars[4]){
            return(
                <>
                     <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart5' onClick={(e)=> addFavorite(shortGuitars[4].id, 5, e)}/>  
                    <img src="/assets/images/filledHeart.png"   className = 'likeOff' id='luHeart5'onClick={(e)=> unFavorite(shortGuitars[4].id, 5, e)}/> 
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
                </>
            )
        } else {
            return(<></>)
        }
    }

    const InstrumentSix = () => {
        if (shortGuitars[5]){
            return(
                <>
                     <div className='thumb-instrumentWrapper'>
             <div className='carousel-fav-button'>
                    <img src='/assets/images/emptyHeart.png' className = 'likeOn' id='ioMdHeart6' onClick={(e)=> addFavorite(shortGuitars[5].id, 6, e)}/>  
                    <img src="/assets/images/filledHeart.png"   className = 'likeOff' id='luHeart6'onClick={(e)=> unFavorite(shortGuitars[5].id, 6, e)}/> 
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

                </>
            )
        }
    }

 
    return<>
    <div className='carousel'>




    <div id='outer-outer-wrapper'>
    <div id='carousel-header-wrapper'>
    <h2 className='carousel-header'>New and Featured</h2>

    </div>


        


    <div className='instrumentWrapperWrapper'>
  
    
        <InstrumentOne />
        <InstrumentTwo />
        <InstrumentThree />
        <InstrumentFour />
        <InstrumentFive />
        <InstrumentSix />



    </div>
    


    </div>
    

    </div>

    </>

}

export default GuitarsCarousel