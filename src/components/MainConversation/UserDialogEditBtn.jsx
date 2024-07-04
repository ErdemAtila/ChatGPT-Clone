import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function UserDialogEditBtn() {
    return (
    <div className='edit-icon'>
        <FontAwesomeIcon icon={faPencil} />
    </div>
    );
}


export default UserDialogEditBtn;