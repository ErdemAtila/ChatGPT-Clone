import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';


function UserDialogEditBtn() {
    return (
    <div className='edit-icon tooltip-container' onClick={() => console.log("Edit prompt")}> 
        <FontAwesomeIcon icon={faPencil} />
        <span className="tooltip-text">Read Aloud</span>

    </div>
    );
}


export default UserDialogEditBtn;