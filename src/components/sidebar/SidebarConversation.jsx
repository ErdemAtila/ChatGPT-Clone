import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { editHandler, blurHandler } from '../../commonFunctions';
import SidebarConvOptions from './SidebarConvOptions';

function SidebarConversation({ text, id }) {
  const [editId, setEditId] = useContext(AppContext);
  const editInputRef = useRef(null);
  const popupRef = useRef(null);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const toggleEditPopup = (id) => {
    setIsEditPopupOpen(!isEditPopupOpen);
    setEditId(id);
  };
  const closeEditPopup = () => {
    setEditId(null);
    setIsEditPopupOpen(false);
  };

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
  }, [isEditPopupOpen]);

  return (
    <div className="conversation">
      <p>{text}</p>
      <div
        className='options tooltip-container'
        ref={popupRef}
        onClick={() => {
          editHandler(id, setEditId, editInputRef);
          toggleEditPopup(id);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
        <span className="tooltip-text small">Edit</span>
      </div>

      {editId === id && isEditPopupOpen && (
        <SidebarConvOptions editId={editId} id={id} />
      )}
    </div>
  );
}

export default SidebarConversation;
