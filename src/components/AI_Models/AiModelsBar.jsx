import { faStar, faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import AiModel from './AiModel';
import TemporaryChat from './TemporaryChat';
import AiModelsHeader from './AiModelsHeader';

import React, { useRef, useEffect } from 'react';


function AiModelsBar({ isOpen, onClose }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }


    return(
      <div ref={popupRef} className='models'>
        <AiModelsHeader icon={faCircleInfo} />

        <AiModel leftIcon={faStar} rightIcon={faCircleCheck} modelName="GPT-4o" modelDesc="Newest and most advanced model" />
        <AiModel leftIcon={faStar} modelName="GPT-4" modelDesc="Advanced model for complex tasks" />
        <AiModel leftIcon={faStar} modelName="GPT-3.5" modelDesc="Great for everday tasks" />
        <hr />
        <TemporaryChat />
      </div>
    );
}


export default AiModelsBar;