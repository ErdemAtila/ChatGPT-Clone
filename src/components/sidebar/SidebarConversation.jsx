import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


function SidebarConversation ({text}) {
    return(
    <div className="conversation">
        <p>
        {text} 
        </p>
        <div className='options'>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    );
}

export default SidebarConversation;