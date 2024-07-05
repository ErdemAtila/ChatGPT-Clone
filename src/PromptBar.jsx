import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import UploadBtn from './components/UploadBtn';
import { useEffect, useRef, useState } from 'react';

export function PromptBar ({promptText, setPromptText, submitBtnRef}) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    function promptTextHandler(e) {
        setPromptText(e.target.value);
    }





    return (
        <div className='prompt-bar'>
            <UploadBtn />
            <input value={promptText} onKeyDown={(e) => e.key == "Enter" ? submitBtnRef.current.click() : null} onChange={(e) => promptTextHandler(e)} ref={inputRef} type="text" placeholder='Message ChatGPT'/>
            <button ref={submitBtnRef} style={promptText ? {backgroundColor:"white"} : {}}><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    );
}

