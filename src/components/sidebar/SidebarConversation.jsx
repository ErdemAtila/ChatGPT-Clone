import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowUpFromBracket, faPencil, faBoxArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useRef } from 'react';
import { AppContext } from '../../App';
import { editHandler, blurHandler } from '../../commonFunctions';


function SidebarConversation ({text, id}) {
  const [editId,setEditId] = useContext(AppContext);
  const editInputRef = useRef(null);

  

    return(
    <div className="conversation">
        <p>
        {text} 
        </p>
        <div className='options tooltip-container' onClick={() => editHandler(id, setEditId, editInputRef)}>
          <FontAwesomeIcon  icon={faEllipsis} />
          <span class="tooltip-text small" >Edit</span>
        </div>

        {editId == id ?
        <div class={editId == id ? "edit-menu show" : "edit-menu"}>
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
        : <></>
        }
      </div>
    );
}

export default SidebarConversation;