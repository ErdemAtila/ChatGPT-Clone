import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRecord } from './commonFunctions';
import { useEffect, useState } from 'react';


function Recommendation ({icon, text, submitBtnRef, inputRef}) {
    

    return (
    <div className='recommendation' onClick={() => {inputRef.current.name = text; setTimeout(()=> submitBtnRef.current.click(), 300)}}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
    </div>
    );
}

export default Recommendation