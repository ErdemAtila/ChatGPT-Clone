import './App.css';
import Navbar from './components/Navbar';
import AiModelsBar from './components/AI_Models/AiModelsBar';
import ProfilePopup from './components/Profile_Popup/ProfilePopup';
import RecommendationBar from './components/RecommendationBar';
import {PromptBar} from './PromptBar';
import SidebarHeader from './components/sidebar/SidebarHeader';
import SidebarGptsBar from './components/sidebar/SidebarGptsBar';
import SidebarConversationBar from './components/sidebar/SidebarConversationBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import logo from "./assets/chatgpt_logo.png";

import { useEffect, useRef, useState, createContext, useContext } from 'react';

export const AppContext = createContext();


function App() {
  //Sidebar
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isModelsPopupOpened, setIsModelsPopupOpened] = useState(false);

  //Popups
  const [isModelsPopupOpen, setIsModelsPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const toggleModelsPopup = () => {
      setIsModelsPopupOpen(!isModelsPopupOpen);
  };
  const closeModelsPopup = () => {
      setIsModelsPopupOpen(false);
  };
  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isModelsPopupOpen);
  };
  const closeProfilePopup = () => {
      setIsProfilePopupOpen(false);
  };


  //Prompt Bar
  const [promptText, setPromptText] = useState("");
  const submitBtnRef = useRef();


  //Editable Record
  const [editId, setEditId] = useState(0);



  return (
    <AppContext.Provider value={[editId, setEditId]}>


    <div className='page'>
      <div className='sidebar' style={isSidebarOpened ? {width: "0px", padding: "10px 0px"}  : null}>
        < SidebarHeader setIsSidebarOpened={setIsSidebarOpened}/>
        <div>
          < SidebarGptsBar />
          < SidebarConversationBar text="Today"/>
          {/* < SidebarConversationBar text="In Last 30 Days"/> */}
 
        </div>

        <footer>
          <div className="icon">
          <FontAwesomeIcon icon={faRankingStar} />
          </div>
          
          <div>
            <p>Add Team br workspace <br /><span>Collaborate on a Team plan</span></p>
            
          </div>
        </footer>
      </div>
      
      <main>
          <Navbar 
              setIsSidebarOpened={setIsSidebarOpened} 
              isSidebarOpened={isSidebarOpened}
              setIsModelsPopupOpened={setIsModelsPopupOpened}
              toggleModelsPopup={toggleModelsPopup}
              toggleProfilePopup={toggleProfilePopup}
              />
          <div className='chat-bar'>
              <AiModelsBar isOpen={isModelsPopupOpen} onClose={closeModelsPopup}  />
              <ProfilePopup isOpen={isProfilePopupOpen} onClose={closeProfilePopup} />
            <div className='middle-logo'>
              <img src={logo} alt="logo" />
            </div>
            <RecommendationBar setPromptText={setPromptText} submitBtnRef={submitBtnRef}/>
          </div>


          <footer>
            <PromptBar setPromptText={setPromptText} promptText={promptText} submitBtnRef={submitBtnRef}/>
            <p>ChatGPT can make mistakes. Check important info.</p>
          </footer>
      </main>
    </div>
    </AppContext.Provider>

  )
}

export default App
