import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { editHandler, blurHandler } from '../../commonFunctions';
import SidebarConvOptions from './SidebarConvOptions';


function SidebarConversation ({text, id}) {
  const [editId,setEditId] = useContext(AppContext);
  const editInputRef = useRef(null);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const toggleEditPopup = () => {
    setIsEditPopupOpen(!isEditPopupOpen);
  };
  const closeEditPopup = () => {
      setIsEditPopupOpen(false);
  };



  

    return(
    <div className="conversation">
        <p>
        {text} 
        </p>
        <div className='options tooltip-container' onClick={() => (id, setEditId, editInputRef)}>
          <FontAwesomeIcon  icon={faEllipsis} onClick={() => toggleEditPopup()}/>
          <span class="tooltip-text small" >Edit</span>
        </div>

        {editId == id ?
          <SidebarConvOptions editId={editId} id={id} closeEditPopup={closeEditPopup} isEditPopupOpen={isEditPopupOpen}/>
        : <></>
        }
      </div>
    );
}

export default SidebarConversation;