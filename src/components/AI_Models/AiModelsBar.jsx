import { faStar, faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import AiModel from './AiModel';
import TemporaryChat from './TemporaryChat';
import AiModelsHeader from './AiModelsHeader';

import React, { useRef, useEffect } from 'react';


function AiModelsBar({ isOpen, onClose, setAIModel, AIModel, setIsTemporary, isTemporary, setCurrentConversation}) {
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

        <AiModel setAIModel={setAIModel} leftIcon={faStar} rightIcon={AIModel == "gpt-4o" ? faCircleCheck : null} modelName="gpt-4o" modelDesc="Newest and most advanced model" />
        <AiModel setAIModel={setAIModel} leftIcon={faStar} rightIcon={AIModel == "gpt-4" ? faCircleCheck : null} modelName="gpt-4" modelDesc="Advanced model for complex tasks" />
        <AiModel setAIModel={setAIModel} leftIcon={faStar} rightIcon={AIModel == "gpt-3.5-turbo" ? faCircleCheck : null} modelName="gpt-3.5-turbo" modelDesc="Great for everday tasks" />
        <hr />
        <TemporaryChat isTemporary={isTemporary} setIsTemporary={setIsTemporary} setCurrentConversation={setCurrentConversation} />
      </div>
    );
}


export default AiModelsBar;