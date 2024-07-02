import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProfilePopupOption ({icon, text}) {
    return (
        <div>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </div>
    );    
}

export default ProfilePopupOption;