import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../App';
import { editHandler, blurHandler } from '../../commonFunctions';
import { useContext, useRef } from 'react';



function SidebarGpt ({icon, text, id}) {
    const [editId,setEditId] = useContext(AppContext);
    const editInputRef = useRef(null);

    return(
    <div className='gpt'>
        <div>
            <span><FontAwesomeIcon icon={icon} /></span>
            <p contentEditable={editId == id} onBlur={(e) => blurHandler(e, id, setEditId, editInputRef)} ref={editInputRef}>{text}</p>
        </div>

        <div>
            <FontAwesomeIcon onClick={() => editHandler(id, setEditId, editInputRef)} icon={faEllipsis} />
            <FontAwesomeIcon icon={faPenToSquare} />
        </div>
    </div>
    );
}

export default SidebarGpt;