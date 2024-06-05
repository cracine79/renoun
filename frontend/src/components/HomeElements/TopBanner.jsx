import './TopBanner.css'
import guitars from '../../../assets/images/electric-guitars.jpeg'
import keys from '../../../assets/images/keyboards.jpeg'
import pedals from '../../../assets/images/pedals.jpeg'
import { Link } from 'react-router-dom'

export default function TopBanner (){
    return(
        <div id= 'top-banner'>
            <div id = 'banner-left'>
                <h1 id='banner-top' className='banner-words'>Get the sound you love for less</h1>
                <h3 id='banner-bottom' className='banner-words'>Save an average of 30% when you buy used music gear</h3>
                <button id='banner-button'>Shop all</button>
            </div>
            <div id='pics-wrap'>
                <div>

                    
                </div>
                <Link to='/guitars 'id='elec-guitar-wrap' className='banner-wrap'>
                    <img className='banner-pic' src={guitars}/>
                    <div className='banner-pic-caption'>
                        <p className='banner-text'>
                            Electric Guitars
                        </p>
                    </div>
                </Link>

                <Link to='pedals' id='effects-pedals-wrap' className='banner-wrap'>
                    <img className='banner-pic' src={pedals}/>
                    <div className='banner-pic-caption'>
                        <p className='banner-text'>
                            Effects and Pedals
                        </p>
                    </div>
                </Link>

                <Link to='keys' id='keys-synths-wrap' className='banner-wrap'>
                    <img className='banner-pic' src={keys}/>
                    <div className='banner-pic-caption'>
                        <p className='banner-text'>
                            Keys and Synths
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}