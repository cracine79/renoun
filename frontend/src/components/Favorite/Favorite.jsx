import './Favorite.css'
import GenericCarousel from '../Carousel/GenericCarousel'
import { useSelector } from 'react-redux'
import RealGenericCarousel from '../Carousel/RealGenericCarousel'
const Favorite = () => {

    const instrumentsObj = useSelector(state=>(state.instruments))
    const instruments = Object.values(instrumentsObj)
    const currentUser = useSelector(state=>(state.session.user))
    if (currentUser){
        const userId = currentUser.id
    }
    
    const favoritesObj = useSelector(state=>(state.favorites))
    const favorites = Object.values(favoritesObj)
    const favoriteInstrumentIds = favorites.map((favorite)=>{
        return favorite.instrumentId
    })
     
    const favoriteInstruments = []
    favoriteInstrumentIds.forEach((id)=>{
        favoriteInstruments.push(instruments[id-1])
    })

let rowRequirement
   if(favoriteInstruments.length%6===0){
    rowRequirement = favoriteInstruments.length/6
   } else {
    rowRequirement = Math.floor(favoriteInstruments.length/6)+1
   }

   let i=0
   let allRows = []

   while(i<rowRequirement){
  
    let row = favoriteInstruments.slice((i*6+0),(i*6+6))
    allRows.push(row)
    i+=1
   }




    return (
        <>
            <div id='fav-wrapper-wrapper'>
                <div id='behind-wrapper'>
                    <div id='introducing-wrapper'>
                        <div id='fav-inner-wrapper'>
                            <div id='favs-banner-image' src='/assets/images/favorites-banner-images.png'></div>
                            <div id='favs-banner-words'>
                                <p id='introducing-favorites'>Introducing: Favorites</p>
                                <p id='Favs-description'>Get price drops and special offers on items in your Watch List</p>
                            </div>
                        </div>
                          

                    </div>

                </div>
                <div className='fav-head-wrap'>
                  <h1 id='favorite-one-word'>Favorites</h1>  
                   
          
                </div>
                <div className='fav-line'></div>
                <div className='fav-head-wrap'>
               
                   
                  <h2 id='watch-list'>Watch List</h2>
                  {allRows.map((row)=>{
                    return(
                        <RealGenericCarousel row={row} rowId={row[0].id}/>
                    )
                })}
                  
                </div>
                
                
               
            </div>
        </>
    )

}

export default Favorite