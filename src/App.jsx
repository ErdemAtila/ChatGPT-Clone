import './App.css';
import logo from "./assets/chatgpt_logo.png";

import Navbar from './components/Navbar';
import AiModelsBar from './components/AI_Models/AiModelsBar';
import ProfilePopup from './components/Profile_Popup/ProfilePopup';
import RecommendationBar from './components/RecommendationBar';
import PromptBar from './PromptBar';
import SidebarHeader from './components/sidebar/SidebarHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

import SidebarGptsBar from './components/sidebar/SidebarGptsBar';
import SidebarConversationBar from './components/sidebar/SidebarConversationBar';

function App() {

  return (
    <div className='page'>
      <div className='sidebar'>
        < SidebarHeader/>
        <div>
          < SidebarGptsBar />
          < SidebarConversationBar text="Today"/>
          < SidebarConversationBar text="In Last 30 Days"/>
          < SidebarConversationBar text="In Last 30 Days"/>
          < SidebarConversationBar text="In Last 30 Days"/>
          < SidebarConversationBar text="In Last 30 Days"/>
          < SidebarConversationBar text="In Last 30 Days"/>
          < SidebarConversationBar text="In Last 30 Days"/>
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
          <Navbar />
          {/* there are 2 types of chat-bar; "Initial" and "chat" mode */}
          <div className='chat-bar'>
                  {/* <AiModelsBar /> */}

                  {/*After clicked profile, this will be opened */}
                  {/* <ProfilePopup /> */}
            <div className='middle-logo'>
              <img src={logo} alt="logo" />
            </div>
            <RecommendationBar />
          </div>


          <footer>
            <PromptBar />
            <p>ChatGPT can make mistakes. Check important info.</p>
          </footer>
      </main>
    </div>
  )
}

export default App
