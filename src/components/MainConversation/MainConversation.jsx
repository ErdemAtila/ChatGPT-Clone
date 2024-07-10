import { findConversationById } from "../../commonFunctions";
import UserDialog from "./UserDialog";
import AssistantDialog from "./AssistantDialog";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';




function MainConversation({currConversationId, lastResponse, inputRef, setLastResponse, conversationBarRef, submitBtnRef, loading}) {
    let results = findConversationById(currConversationId);
    let dialogs = results.length != 0 ? results[0].conversation : results;
    const scrollToBottom = () => {
        if (conversationBarRef.current) {
            setTimeout(() => {
                conversationBarRef.current.scrollTo({
                    top: conversationBarRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }, 20); 
        }
    };


    useEffect(() => {
        dialogs.length <= 2 ?    /*scrollToBottom()*/ null : conversationBarRef.current.scrollTop = conversationBarRef.current.scrollHeight;
    }, [currConversationId]);

    useEffect(() => {
        scrollToBottom();
    }, [loading, dialogs]);


    return(
        <div className="main-conversation" ref={conversationBarRef}>
            {
                dialogs.map((item, index) => item.role == "user" ? 
                <UserDialog key={uuidv4()} inputRef={inputRef}  text={item.content} submitBtnRef={submitBtnRef} /> :
                <AssistantDialog conversationBarRef={conversationBarRef} key={uuidv4()} text={item.content} setLastResponse={setLastResponse} lastResponse={lastResponse} isItLast={index == dialogs.length -1 } />             )
            }
            {loading ? <AssistantDialog text={<FontAwesomeIcon className="loading-icon" icon={faCircle} fade />} />: null}
        </div>
    );
}

export default MainConversation;