import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import UploadBtn from './components/UploadBtn';

function PromptBar () {
    return (
    <div className='prompt-bar'>
        <UploadBtn />
        <input type="text" placeholder='Message ChatGPT'/>
        <button><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
    );
}

export default PromptBar;