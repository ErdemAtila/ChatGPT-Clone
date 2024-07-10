import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons';




function SidebarGpt ({icon, text, setCurrentConversation}) {

    return(
    <div className='gpt' onClick={() => setCurrentConversation(0)}>
        <div>
            <span><FontAwesomeIcon icon={icon} /></span>
            <p>{text}</p>
        </div>

        <div>
            {/* <FontAwesomeIcon icon={faEllipsis} />
            <FontAwesomeIcon icon={faPenToSquare} /> */}
        </div>
    </div>
    );
}

export default SidebarGpt;