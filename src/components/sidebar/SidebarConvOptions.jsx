import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faPencil, faBoxArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function SidebarConvOptions({editId, id}) {
    return (
        <div class="edit-menu show">
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