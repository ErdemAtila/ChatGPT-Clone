import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons';



function SidebarGpt ({icon, text}) {
    return(
    <div className='gpt'>
        <div>
            <span><FontAwesomeIcon icon={icon} /></span>
            <p>{text}</p>
        </div>

        <div>
            <FontAwesomeIcon icon={faEllipsis} />
            <FontAwesomeIcon icon={faPenToSquare} />
        </div>
    </div>
    );
}

export default SidebarGpt;