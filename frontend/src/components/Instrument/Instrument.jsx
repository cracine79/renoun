// import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Instrument.css'
import { LuHeart } from "react-icons/lu"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Instrument = () => {
    const instrumentId = 2;
    const instrument = useSelector(state=>(state.instruments[1]))
    // const seller = useSelector(state=>state.users[instrument.seller_id])

    let conditionExplanation = ''

    useEffect(()=>{
        const recently = document.getElementById('recent-wrapper');
        if(diffDays<7){
          recently.style.display='flex';
        } else {
          recently.style.display='none';
        };
    },[])

    if(instrument.condition==='Brand New'){

    } else if (instrument.condition==='Used - Mint'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else if (instrument.condition === 'Used - Excellent'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else if (instrument.condition === 'Used - Good'){
        conditionExplanation = 'Good condition items function properly but may exhibit some wear and tear.'
    }else if (instrument.condition === 'Used - Poor'){
        conditionExplanation = 'Mint items are in essentially new original condition but have been opened or played.'
    }else{
        conditionExplanation = 'Oops!  The condition for this instrument is unavailable!'
    }


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      let shipping = ''
      if (instrument.shipping === 0){
        shipping = "+ FREE Shipping"

      } else {
        shipping = `+ $${instrument.shipping} Shipping`
 
      }

      const low = Math.floor(instrument.price/11);
    
      const date1 = new Date();
      const date2 = new Date(instrument.createdAt);
      const diffTime = date2.getTime() - date1.getTime(); 
      const diffDays = Math.floor(Math.abs(diffTime / (1000 * 3600 * 24)));
      const diffHours = Math.floor(Math.abs(diffTime / (1000 * 3600)))
      let listedExpl = ''

      if (diffDays<1){
        listedExpl = `Listed within the past ${diffHours} hours`
      } else {
        listedExpl = 'Listed within the past 7 days'
      }  
      
      

    console.log (instrument.createdAt)

    return(
        <>
       
        <div id='page-wrapper'>
            <div id='left'>
                <div id='linkbox'>
                    <Link className='instInfoLink' to='/'>Home</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.category}</Link>
                     <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.brand}</Link>
                    <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> 
                    <Link className='instInfoLink'>{instrument.model}</Link>
                </div>

                <div id='photobox'>
                    <img id= 'photo' src={instrument.photoUrl} />
                    <div className='like' id='biglike'>
                             <LuHeart /> 
                     </div>
                </div>
         
            </div>

            <div id='right'>
                <div id='instrumentInfoBox'>
                    <h1 id='title'>{instrument.itemName}</h1>
                    
                    <div id='condition-box'>
                        <p id='condition'>{instrument.condition}</p>
                        <div id='condition-explanation-box'>
                            <p id='condition-explanation'>
                                {conditionExplanation}
                            </p>      
                        </div>
                    </div>
                    <p id='inst-page-price'>{formatter.format(instrument.price)}</p>
                    <p id='shipping'>{shipping}</p>
                  
                    <p id='affirm'>As low as <span id='low'>${low}</span>/mo with <div id='blucirc'></div><span id='affirm-text'>affirm</span>  </p>

                    <p>{instrument.created_at}</p>
                    <div id='recent-wrapper'>
                        <img src='../../assets/images/sparkles.svg'  id='sparkle'/>
                        <span id='recently-listed'>  Recently Listed
                        <div id='listed-explanation'>{listedExpl}</div>
                        </span>
                    </div>

                    <div id='buyItNow'>
                        Buy It Now
                    </div>
                    <div id='button-holder'>
                        <div className='otherButton'>
                            Add to Cart
                        </div>
                        <div className='otherButton'>
                            Make an Offer
                        </div>
                    </div>
                    <div id = 'watch-button'>
                        <LuHeart /> Watch
                    </div>

                    <p id='product-background-info'>
                        <div>
                            <span className='key'>
                                Listed: 
                            </span>
                            <span className='value'>
                                 {diffDays} days ago
                            </span>
                        </div>

                        <div>
                            <span className='key'>
                                Watchers: 
                            </span>
                            <span className='value'>
                                0 
                            </span>
                        </div>
                    </p>

                    <hr id = 'button-bottom' />


                    



                </div>

            </div>
        </div>
        </>
    )
}

export default Instrument;