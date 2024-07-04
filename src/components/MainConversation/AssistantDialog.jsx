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
            <FontAwesomeIcon icon={faVolumeHigh} />
            <FontAwesomeIcon icon={faClone} />
            <FontAwesomeIcon icon={faThumbsDown} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    </div>
    );
}

export default AssistantDialog;