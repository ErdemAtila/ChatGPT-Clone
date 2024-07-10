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
  const [AIModel, setAIModel] = useState("gpt-3.5-turbo");
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
  const submitBtnRef = useRef();
  const inputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [lastResponse, setLastResponse] = useState("");


  //Editable Record
  const [editId, setEditId] = useState(0);

  //currentConversation
  const [currConversation, setCurrentConversation] = useState(0);
  const conversationBarRef = useRef(null);

  const [sampleData, setData] = useState(data);

  //useEffect(()=> console.log(sampleData), [sampleData]);

  //conversation categories
  const getConversationDateCategories = () => {
    const priority = {
      'today': 0,
      'yesterday': 1,
      'Previous 7 Days': 2,
      'Previous 30 Days': 3,
      'Older': 4
    };
    let unsortedCategories = [... new Set(sampleData.map(item => !item.isArchieved ? determineDateCategory(item.date) : null).filter(item => item != null))]
    const sortedList = unsortedCategories.sort((a, b) => priority[a] - priority[b]);
    return sortedList;
  }  

  // temporary chat
  const [isTemporary, setIsTemporary] = useState(false);




  return (
    <AppContext.Provider value={[editId, setEditId]}>
    <div className='page'>
      <div className='sidebar' style={isSidebarOpened ? {width: "0px", padding: "10px 0px"}  : null}>
        < SidebarHeader setIsTemporary={setIsTemporary} setIsSidebarOpened={setIsSidebarOpened} setCurrentConversation={setCurrentConversation}/>
        <div>
          < SidebarGptsBar setCurrentConversation={setCurrentConversation} />

          {
            // firslt, getting which category dates we got (pre, today, yester), then rendering ConversationBar. Inside Bar rendering items in "data" by looing at category that item has
            getConversationDateCategories().map((category,index) => {return < SidebarConversationBar setIsTemporary={setIsTemporary} key={index} setLastResponse={setLastResponse} text={category} currConversation={currConversation} setCurrentConversation={setCurrentConversation} setData={setData} data={sampleData}/>})
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
              setCurrentConversation={setCurrentConversation}
              AIModel={AIModel.toUpperCase()}
              setIsTemporary={setIsTemporary}
              />
          <div className='chat-bar'>
            <AiModelsBar isTemporary={isTemporary} setIsTemporary={setIsTemporary} setCurrentConversation={setCurrentConversation} AIModel={AIModel} setAIModel={setAIModel} isOpen={isModelsPopupOpen} onClose={closeModelsPopup}  />
            <ProfilePopup isOpen={isProfilePopupOpen} onClose={closeProfilePopup} />

            {
              currConversation == 0 ? 
              <>
                <Logo />
                <RecommendationBar inputRef={inputRef} setCurrentConversation={setCurrentConversation} submitBtnRef={submitBtnRef} setData={setData}/>
              </> : 
              <MainConversation inputRef={inputRef} lastResponse={lastResponse} setLastResponse={setLastResponse} loading={loading} currConversationId={currConversation} conversationBarRef={conversationBarRef}  submitBtnRef={submitBtnRef} />
            }

          </div>


          <footer>
            <PromptBar isTemporary={isTemporary} inputRef={inputRef} AIModel={AIModel} lastResponse={lastResponse} setLastResponse={setLastResponse} setLoading={setLoading} currConversation={currConversation} setCurrentConversation={setCurrentConversation} setData={setData} data={sampleData} submitBtnRef={submitBtnRef}/>
            <p>ChatGPT can make mistakes. Check important info.</p>
          </footer>
      </main>
    </div>
    </AppContext.Provider>

  )
}

export default App
