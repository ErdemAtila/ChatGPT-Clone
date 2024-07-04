import logo from "../../assets/chatgpt_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faClone, faThumbsDown, faStar } from '@fortawesome/free-solid-svg-icons';


function AssistantDialog({text}) {
    return(
    <div className="assistant-dialog">
        <div className="icon">
            <img src={logo} alt="" />
        </div>
        {text}

        <div className="actions">
            <div className="tooltip-container">
                <FontAwesomeIcon icon={faVolumeHigh} />
                <span class="tooltip-text">Read Aloud</span>
            </div>
            <div className="tooltip-container">
                <FontAwesomeIcon icon={faClone} />
                <span class="tooltip-text">Copy</span>
            </div>
            <div className="tooltip-container">
                <FontAwesomeIcon icon={faThumbsDown} />
                <span class="tooltip-text">Bad Response</span>
            </div>
            <div className="tooltip-container">
                <FontAwesomeIcon icon={faStar} />
                <span class="tooltip-text">Favourite</span>
            </div>
        </div>
    </div>
    );
}

export default AssistantDialog;