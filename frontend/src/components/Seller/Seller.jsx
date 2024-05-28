import './Seller.css'

function Seller({instrument}){
    return(
        <>
        <div id='seller-wrapper'>
                <h1 className='aboutThisListing'>About the Seller</h1>
                <div id='seller-dets'>
                    <div id='shop-wrap'>
                        <img id='shop' src='../../assets/images/my-shop-orange-892ef04585ac0da6.svg' />
                    </div>
                    <h2 id='seller-info'>
                        Seller ID: {`${instrument.sellerId}`}
                    </h2>
            
                </div>
                <hr className='sellerLine' />

                <h1 className = 'specs'> Seller Reviews: COMING SOON! </h1>
        </div>
        </>
    )
}

export default Seller;