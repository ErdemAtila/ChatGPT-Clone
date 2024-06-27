import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faStar, faComment, faCircleCheck, faCircleInfo, faCertificate, faUsersRays, faBook, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import profile from "./assets/profile.jpg"


function App() {

  return (
    <main>
      <nav>
        <div className='model-bar'>
          <span>ChatGPT 4o</span>
          <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>

        <img src={profile} alt="logo" />

      </nav>



      {/* there are 2 types of chat-bar; "Initial" and "chat" mode */}
      <div className='chat-bar'>
        <div className='models'>
          <header>
            <span>Model</span>
            <FontAwesomeIcon icon={faCircleInfo} />
          </header>
          <div className='model'>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <div className='information'>
                <p>GPT-4o</p>
                <p>Newest and most advanced model</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div className='model'>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <div className='information'>
                <p>GPT-4</p>
                <p>Advanced model for complex tasks</p>
              </div>
            </div>
          </div>
          <div className='model'>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <div className='information'>
                <p>GPT-3.5</p>
                <p>Great for everday tasks</p>
              </div>
            </div>
          </div>
          <hr />
          <div className='model'>
            <div>
            <FontAwesomeIcon icon={faComment} />
              <div className='information'>
                <p>Temporary Chat</p>
                <p></p>
              </div>
            </div>
            <div class="checkboxes__item">
              <label class="checkbox style-e">
                <input type="checkbox"/>
                <div class="checkbox__checkmark"></div>
              </label>
            </div>
          </div>
        </div>

        {/*After clicked profile, this will be opened */}
        <div className='profile'>
          <div>
            <FontAwesomeIcon icon={faCertificate} />
            <span>My Plan</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsersRays} />
            <span>My GPTs</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBook} />
            <span>Customize ChatGPT</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </div>
          <hr />
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>Log out</span>
          </div>
        </div>

        <div>
        </div>
        <div className='recommendations'>
          <div className='recommendation'></div>
          <div className='recommendation'></div>
          <div className='recommendation'></div>
          <div className='recommendation'></div>
        </div>
      </div>



      <div className='prompt-bar'>

      </div>
    </main>
  )
}

export default App
