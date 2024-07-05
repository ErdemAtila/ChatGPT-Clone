import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRecord } from './commonFunctions';


function Recommendation ({icon, text, setPromptText, submitBtnRef, setData, setCurrentConversation}) {
    return (
    <div className='recommendation' onClick={() => {setPromptText(text); createRecord(text, setData, setCurrentConversation, setPromptText)}}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
    </div>
    );
}

export default Recommendation