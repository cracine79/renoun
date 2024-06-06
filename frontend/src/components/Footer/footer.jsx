import './footer.css'
import { ImMusic } from "react-icons/im";
import { RiTreeLine } from "react-icons/ri";

function Footer(){
    const goToGitHub = ()=>{
        window.open('https://github.com/cracine79')
    }

    const goToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/charlee-racine-50241a7b/')
    }
    return<>
        <div id='footer'>
                <div className='footer-quarter' id='left-quarter'>
                    <div id='location-currency'>
                        <span id='world-quarter' className='button-quarter'>&#127760; </span>
                        <span className='button-quarter'>Continental U.S.</span>
                        <span className='button-quarter'>English</span>
                        <span id='usd-quarter' className='button-quarter'>$ USD</span>
                    </div>
                    <p id='disclaimer'>Developed for educational purposes only by CharLee Racine</p>
                </div>
                <div className='footer-quarter' id='mid-left-quarter'>
                <div className='footer-csr-wrapper'>
                    <div className='footer-csr-icon'>
                    <div className='footer-csr-circle'></div>
                        <div className='footer-csr-icon-wrapper'>
                         <ImMusic />
                        </div>
                    </div>
                    <div className='footer-csr-words-wrap'>
                        <p className='footer-csr-title'>Renoun is a Reverb Clone</p>
                        <p className='footer-csr-expl'>Reverb is an online marketplace that connects buyers and sellers of used and new instruments.</p>
                    </div>
                </div>



                </div>
                <div className='footer-quarter' id='mid-right-quarter'>
                <div className='footer-csr-wrapper'>
                 <div className='footer-csr-icon'>
                    <div className='footer-csr-circle'></div>
                        <div id='footer-csr-tree' className='footer-csr-icon-wrapper'>
                        <RiTreeLine />
                        </div>
                    </div>
                    <div className='footer-csr-words-wrap'>
                        <p className='footer-csr-title'>Be Good to Each Other</p>
                        <p className='footer-csr-expl'>Thank you for taking the time to check out my work. Take the time to be unreasonably kind to somebody today.</p>
                    </div>

                    
                </div>

                </div>
                <div className='footer-quarter'  id='right-quarter'>
                    <div id='logo-wrap'>
                        <div className='social-link' onClick={goToGitHub} id='github-logo'></div>
                        <div className='social-link' onClick={goToLinkedIn} id='linkedIn-logo'></div>
                    </div>
                   
                </div>


          

        </div>
    </>
}

export default Footer;