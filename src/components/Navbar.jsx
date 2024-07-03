import profile from "../assets/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SidebarOpenCloseBtn from "./sidebar/SidebarOpenCloseBtn";



function Navbar ({setIsSidebarOpened, isSidebarOpened, setIsModelsPopupOpened, toggleModelsPopup, toggleProfilePopup}) {

    return(
      <nav>
        <div className='model-bar'>
          {
            isSidebarOpened ? 
            <>
              <SidebarOpenCloseBtn setIsSidebarOpened={setIsSidebarOpened} /> 
              <div className="tooltip-container">
                <FontAwesomeIcon icon={faPenToSquare} />
                <span class="tooltip-text left">New Chat</span>
              </div>
            </>  : ""
          }
          
          <div onClick={() => toggleModelsPopup()}>
            <span>ChatGPT 4o</span>
            <span><FontAwesomeIcon icon={faChevronDown} /></span>
          </div>

        </div>
        <div onClick={() => toggleProfilePopup()}>
          <img src={profile} alt="logo" />
          <div className="img-overlay"></div>
        </div>
      </nav>
    )
}

export default Navbar;