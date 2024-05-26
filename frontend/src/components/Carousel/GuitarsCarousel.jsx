import { useSelector } from "react-redux"


function GuitarsCarousel(){

    // const guitars = useSelector(state=>state.instruments)

    return<>
    <div className='carousel'>
    <h2 className='carousel-header'>Recently Viewed</h2>
    <div className='instrumentWrapperWrapper'>
        <div className='instrumentWrapper'>
            <ul>
                <li>
                    {/* {guitars[0].itemName} */}
                </li>
            </ul>
        </div>
    </div>
    </div>

    </>

}

export default GuitarsCarousel