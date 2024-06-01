import './Favorite.css'
import GenericCarousel from '../Carousel/GenericCarousel'
const Favorite = () => {
    return (
        <>
            <div id='fav-wrapper-wrapper'>
                <div id='behind-wrapper'>
                    <div id='introducing-wrapper'>
                        <div id='fav-inner-wrapper'>
                            <img id='favs-banner-image' src='../../assets/images/favorites-banner-images.png'/>
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
                  <div id='generic-carousel-wrapper'>
                  <GenericCarousel />

                  </div>
                  
                </div>
                
                
               
            </div>
        </>
    )

}

export default Favorite