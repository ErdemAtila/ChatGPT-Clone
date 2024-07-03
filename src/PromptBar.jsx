import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import UploadBtn from './components/UploadBtn';
import { useEffect, useRef, useState } from 'react';

export function PromptBar ({promptText, setPromptText}) {
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
        <input value={promptText} onChange={(e) => promptTextHandler(e)} ref={inputRef} type="text" placeholder='Message ChatGPT'/>
        <button><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
    );
}

