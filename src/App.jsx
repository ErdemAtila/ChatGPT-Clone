import './App.css';
import Navbar from './components/Navbar';
import AiModelsBar from './components/AI_Models/AiModelsBar';
import ProfilePopup from './components/Profile_Popup/ProfilePopup';
import RecommendationBar from './components/RecommendationBar';
import {PromptBar} from './PromptBar';
import SidebarHeader from './components/sidebar/SidebarHeader';
import SidebarGptsBar from './components/sidebar/SidebarGptsBar';
import SidebarConversationBar from './components/sidebar/SidebarConversationBar';
import Logo from './Logo';
import MainConversation from './components/MainConversation/MainConversation';
import { determineDateCategory } from './commonFunctions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState, createContext, useContext } from 'react';
export const AppContext = createContext();

let data = JSON.parse(localStorage.getItem("data"));


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

  //currentConversation
  const [currConversation, setCurrentConversation] = useState(0);

  const [sampleData, setData] = useState(data);

  useEffect(()=> console.log(sampleData), [sampleData]);

  //conversation categories
  const getConversationDateCategories = () => {
    const priority = {
      'today': 0,
      'yesterday': 1,
      'Previous 7 Days': 2,
      'Previous 30 Days': 3
    };

    let unsortedCategories = [... new Set(sampleData.map(item => !item.isArchieved ? determineDateCategory(item.date) : null).filter(item => item != null))]

  
    const sortedList = unsortedCategories.sort((a, b) => priority[a] - priority[b]);
  
    return sortedList;
  }  

  console.log();
  console.log(getConversationDateCategories());
  return (
    <AppContext.Provider value={[editId, setEditId]}>
    <div className='page'>
      <div className='sidebar' style={isSidebarOpened ? {width: "0px", padding: "10px 0px"}  : null}>
        < SidebarHeader setIsSidebarOpened={setIsSidebarOpened} setCurrentConversation={setCurrentConversation}/>
        <div>
          < SidebarGptsBar />

          {
            // firslt, getting which category dates we got (pre, today, yester), then rendering ConversationBar. Inside Bar rendering items in "data" by looing at category that item has
            getConversationDateCategories().map((category,index) => {return < SidebarConversationBar key={index} text={category} currConversation={currConversation} setCurrentConversation={setCurrentConversation} setData={setData} data={sampleData}/>})
          }
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

            {
              currConversation == 0 ? 
              <>
                <Logo />
                <RecommendationBar setCurrentConversation={setCurrentConversation} setPromptText={setPromptText} submitBtnRef={submitBtnRef} setData={setData}/>
              </> : 
              <MainConversation currConversationId={currConversation} />
            }

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
