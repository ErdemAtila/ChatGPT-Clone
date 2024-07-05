import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function UserDialogEditBtn() {
    return (
    <div className='edit-icon tooltip-container'>
        <FontAwesomeIcon icon={faPencil} />
        <span className="tooltip-text">Read Aloud</span>

    </div>
    );
}


export default UserDialogEditBtn;