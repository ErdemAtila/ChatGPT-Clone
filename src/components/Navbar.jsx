import profile from "../assets/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Navbar () {

    return(
      <nav>
        <div className='model-bar'>
          <span>ChatGPT 4o</span>
          <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
        <div>
          <img src={profile} alt="logo" />
          <div className="img-overlay"></div>
        </div>
      </nav>
    )
}

export default Navbar;