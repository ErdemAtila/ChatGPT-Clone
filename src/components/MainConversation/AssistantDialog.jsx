import logo from "../../assets/chatgpt_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faThumbsDown, faStar, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import TextToSpeech from "./TextToSpeech";


function AssistantDialog({text, isItLast, lastResponse, setLastResponse, conversationBarRef}) {
    const [isCopied, setIsCopied] = useState(false);

    function copyHandler() {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }



    const [animatedText, setanimatedText] = useState('');

    useEffect(() => {
        let index = 0;
        let theSente = "";
        const timer = setInterval(() => {
          let theLetter = text[index];
          setanimatedText((prev) => prev + theLetter);
          theSente += theLetter;
          index++;

          if (index === text.length && theSente == lastResponse ) {
            //scrollToBottom();
            clearInterval(timer);
            setLastResponse("");
          }
        }, 10); // Adjust typing speed here
    
        return () => clearInterval(timer);
      }, [text]);

    return (
        <div className="assistant-dialog">
            <div className="icon">
                <img src={logo} alt="" />
            </div>
            {
                typeof text == "string" && text.includes("http") ? <a href={text} target="_blank" style={{display: "inline-block", width:"250px", height:"250px"}}><img style={{width:"100%", height:"100%",display:"block", backgroundColor:"grey"}} src={text} /></a>  :
             isItLast && lastResponse == text ? animatedText : text
            }
            <div className="actions">
                <div className="tooltip-container">
                    <span className="tooltip-text">Read Aloud</span>
                    <TextToSpeech text={text}/>
                </div>
                <div className="tooltip-container" onClick={copyHandler}>
                    {
                        isCopied ?
                        <>
                            <span className="tooltip-text">Copied</span>
                            <FontAwesomeIcon icon={faSquareCheck} bounce />
                        </>
                        :
                        <>
                            <span className="tooltip-text">Copy</span>
                            <FontAwesomeIcon icon={faClone} />
                        </>
                    }
                </div>
                <div className="tooltip-container">
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <span className="tooltip-text">Bad Response</span>
                </div>
                <div className="tooltip-container">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="tooltip-text">Favourite</span>
                </div>
            </div>
        </div>
    );
}

export default AssistantDialog;
