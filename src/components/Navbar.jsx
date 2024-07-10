import profile from "../assets/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SidebarOpenCloseBtn from "./sidebar/SidebarOpenCloseBtn";



function Navbar ({setIsTemporary ,setIsSidebarOpened, AIModel, isSidebarOpened, setIsModelsPopupOpened, setCurrentConversation, toggleModelsPopup, toggleProfilePopup}) {

    return(
      <nav>
        <div className='model-bar'>
          {
            isSidebarOpened ? 
            <>
              <SidebarOpenCloseBtn setIsSidebarOpened={setIsSidebarOpened} /> 
              <div className="tooltip-container">
                <FontAwesomeIcon icon={faPenToSquare}  onClick={() => {setCurrentConversation(0); setIsTemporary(false)}}/>
                <span className="tooltip-text left">New Chat</span>
              </div>
            </>  : ""
          }
          
          <div onClick={() => toggleModelsPopup()}>
            <span>Chat{AIModel}</span>
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