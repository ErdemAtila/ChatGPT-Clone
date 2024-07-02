import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Recommendation ({icon, text}) {
    return (
    <div className='recommendation'>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
    </div>
    );
}

export default Recommendation