import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Recommendation ({icon, text, setPromptText, submitBtnRef}) {
    return (
    <div className='recommendation' onClick={() => {setPromptText(text); submitBtnRef.current.click();}}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
    </div>
    );
}

export default Recommendation