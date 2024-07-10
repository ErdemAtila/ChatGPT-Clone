import { useEffect, useRef, useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function UserDialog({ text,  submitBtnRef, inputRef }) {
    const [editPromptText, setEditPromptText] = useState(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (editPromptText != null) {
            adjustHeight();
            editInputRef.current.focus();
        }
    }, [editPromptText]);



    const adjustHeight = () => {
        if (editInputRef.current) {
            editInputRef.current.style.height = 'auto';
            editInputRef.current.style.height = `${editInputRef.current.scrollHeight}px`;

            // Parent elementin yüksekliğini ayarlayın
            const parent = editInputRef.current.parentElement;
            parent.style.height = 'auto';
            parent.style.height = `${editInputRef.current.scrollHeight}px`;
        }
    };

    const handleTextChange = (e) => {
        setEditPromptText(e.target.value);
        //adjustHeight();
    };
    

    return (
        <div className="user-dialog" style={editPromptText == null ? {} : { width: "100%", backgroundColor: "#424242" }}>
            {
                editPromptText == null ? <>{text}</> : <textarea ref={editInputRef} type="text" onChange={handleTextChange} value={editPromptText} />
            }
            {
                editPromptText == null 
                ? 
                 <div className='edit-icon tooltip-container' onClick={() => setEditPromptText(text)}>
                    <FontAwesomeIcon icon={faPencil} />
                    <span className="tooltip-text">Edit Message</span>
                 </div>
                : 
                <div className='edit-buttons'>
                    <div className='cancel' onClick={() => setEditPromptText(null)}>Cancel</div>
                    <div className='send' onClick={() => {inputRef.current.name = editPromptText; setTimeout(()=> submitBtnRef.current.click(), 300)}}>Send</div>
                </div>
            }

        </div>
    );
}

export default UserDialog;
