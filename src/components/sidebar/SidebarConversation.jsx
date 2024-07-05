import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { editHandler, editNameBlurHandler } from '../../commonFunctions';
import SidebarConvOptions from './SidebarConvOptions';

function SidebarConversation({ text, id, setCurrentConversation, setData, currConversation}) {
  // popup visibility handler
  const popupRef = useRef(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const toggleEditPopup = (id) => {
    setIsEditPopupOpen(!isEditPopupOpen);
    setEditId(id);
  };
  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeEditPopup();
      }
    };

    if (isEditPopupOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isEditPopupOpen]);


  // options popup actions
  const [editId, setEditId] = useContext(AppContext);
  const [isRenamed, setIsRenamed] = useState(false);
  const editInputRef = useRef(null);




  return (
    <div className="conversation" style={id == currConversation ? {background: "#212121"}: null} onClick={() => setCurrentConversation(id)}>
      <p contentEditable={isRenamed} ref={editInputRef}  onBlur={(e) => editNameBlurHandler(e, id, setData)}>{text}</p>
      <div
        className='options tooltip-container'
        ref={popupRef}
        onClick={(e) => {
          e.stopPropagation();
          //editHandler(id, setEditId, editInputRef);
          toggleEditPopup(id);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
        <span className="tooltip-text small">Edit</span>
      </div>

      {editId === id && isEditPopupOpen && (
        <SidebarConvOptions editId={editId} id={id} closeEditPopup={closeEditPopup} setIsRenamed={setIsRenamed} setData={setData} editInputRef={editInputRef}/>
      )}
    </div>
  );
}

export default SidebarConversation;
