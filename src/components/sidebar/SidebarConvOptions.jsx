import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faPencil, faBoxArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

function SidebarConvOptions({editId, id, closeEditPopup, isEditPopupOpen}) {
    const popupRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
              closeEditPopup();
            }
        };
    
        if (isEditPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        }, [isEditPopupOpen, closeEditPopup]);
    
        if (!isEditPopupOpen) {
            return null;
        }


    return (
        <div ref={popupRef} class={editId == id ? "edit-menu show" : "edit-menu"}>
            <div className='row'>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <span>Share</span>
            </div>
            <div className='row'>
                <FontAwesomeIcon icon={faPencil} />
                <span>Rename</span>
            </div>
            <div className='row'>
                <FontAwesomeIcon icon={faBoxArchive} />
                <span>Archive</span>
            </div>
            <div className='row'>
                <FontAwesomeIcon icon={faTrashCan} />
                <span>Delete</span>
            </div>
        </div> 
    );
}

export default SidebarConvOptions;