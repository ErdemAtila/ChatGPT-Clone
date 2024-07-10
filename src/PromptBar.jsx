import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


import { createRecord, findConversationById, saveToDB } from './commonFunctions';


import UploadBtn from './components/UploadBtn';
import { useEffect, useMemo, useRef, useState } from 'react';

export function PromptBar ({ isTemporary, AIModel, inputRef, currConversation, submitBtnRef, setData, data, setCurrentConversation, setLoading, setLastResponse}) {
    const [promptText, setPromptText] = useState("");

    function promptTextHandler(e) {
        setPromptText(e.target.value);
    }

    const [messages, setMessages] = useState([]);

    const clickHandler = async (e) => {

        setLoading(true);

        let thePrompt = inputRef.current.name || promptText;
        inputRef.current.name = "";

        let oldMessages = findConversationById(currConversation).length != 0 ? findConversationById(currConversation)[0].conversation : [];
        const newMessages = [...oldMessages, { role: 'user', content: thePrompt }];
        setMessages(newMessages);
    try {
        let botMessage = "";
        if(thePrompt.toLowerCase().includes("draw") || (thePrompt.toLowerCase().includes("create") && thePrompt.toLowerCase().includes("image"))) {
            console.log("image generator");
            const response = await axios.post('https://api.openai.com/v1/images/generations', 
                {
                  prompt: thePrompt,
                  n: 1,
                  size: "256x256",
                  response_format: "url"
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                  }
                }
              );
            botMessage = { role: 'assistant', content: response.data.data[0].url };
              
        }
        else {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', 
                {
                model: AIModel,
                messages: newMessages
                },
                {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                }
                }
            );
            botMessage = response.data.choices[0].message;
            setLastResponse(botMessage.content);
        }


        
        setMessages([...newMessages, botMessage]);
        setPromptText('');


           

        } catch (error) {
        console.error('Error fetching the chat response', error);
        alert('Error: ' + error.response.data.error.message);
        }

        setLoading(false);

        }

        useEffect(() => {
            inputRef.current.focus();

            if (currConversation == 0)
                setMessages([]);


            
        },[currConversation]);

    useEffect(()=> {
        if(messages.length > 0 && currConversation == 0) {
            createRecord(messages, setData, setCurrentConversation, setPromptText, isTemporary);
        } else if(currConversation != 0){
            if (messages.length == 2) {
                async function getAbbrConv(messages) {
                    try {
                        const response = await axios.post('https://api.openai.com/v1/chat/completions',
                            {
                                model: AIModel,
                                messages: [...messages, { role: 'user', content: "can you summarize this conversation with a few words (2,3 or maximum 5 words)?" }]
                            },
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                                }
                            }
                        );
            
                        const botMessage = response.data.choices[0].message;
                        return botMessage;
            
                    } catch (error) {
                        console.error('Error fetching the chat response', error);
                        alert('Error: ' + error.response.data.error.message);
                    }
                }
            
                async function processMessages() {
            
                    const abbrConv = await getAbbrConv(messages);
            
                    const newData = data.map(item => 
                        item.id == currConversation ? 
                        { ...item, conversation: messages, name: abbrConv.content } : 
                        item
                    );
            
                    return newData;
                }
            
                processMessages().then(newData => {                                
                setData(newData);
                saveToDB(newData);
                });
            } else {
                let newData = data.map(item => item.id == currConversation ? {...item, conversation: messages} : item)
                setData(newData);
                saveToDB(newData);
            }
            
            

        }
    }, [messages]);





    return (
        <div className='prompt-bar'>
            <UploadBtn />
            <input value={promptText} onKeyDown={(e) => e.key == "Enter" ? submitBtnRef.current.click() : null} onChange={(e) => promptTextHandler(e)} ref={inputRef} type="text" placeholder='Message ChatGPT'/>
            <button ref={submitBtnRef} onClick={(e) => clickHandler(e)} style={promptText ? {backgroundColor:"white"} : {}}><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
    );
}

