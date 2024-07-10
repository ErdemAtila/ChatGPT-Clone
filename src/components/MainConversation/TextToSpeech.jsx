import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faSpinner, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function TextToSpeech({text}) {
    const [loading, setLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    async function googleTextToSpeech(text) {
        console.log("text to speech");

        try {
            setLoading(true);
            const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Use environment variables for API keys
            if (!apiKey || !text) return;
            const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
            const data = {
                "audioConfig": {
                "audioEncoding": "LINEAR16",
                "effectsProfileId": [
                "small-bluetooth-speaker-class-device"
                ],
                "pitch": 0,
                "speakingRate": 1
                },
                "input": {
                "text": text
                },
                "voice": {
                "languageCode": "en-US",
                "name": "en-US-Journey-F"
                }
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseJson = await response.json();

            // Convert base64 string to a Blob
            const audioContent = responseJson.audioContent;
            const audioBlob = base64ToBlob(audioContent, 'audio/mpeg');
            const audioUrl = URL.createObjectURL(audioBlob);

            setLoading(false);

            return audioUrl;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Helper function to convert base64 to Blob
    function base64ToBlob(base64, type) {
        const binary = atob(base64.replace(/\s/g, ''));
        const len = binary.length;
        const buffer = new ArrayBuffer(len);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return new Blob([view], { type: type });
    }

    return (
        <>
        {
            loading ? 
            <FontAwesomeIcon icon={faSpinner} spinPulse /> :

            isPlaying ? 
            <FontAwesomeIcon icon={faCircleStop} onClick={() => {
                const audioElement = document.getElementById('audio');
                audioElement.pause();
                setIsPlaying(false);
            }} /> :
        <>
            <FontAwesomeIcon icon={faVolumeHigh} id="speakButton" onClick={() => {
                googleTextToSpeech(text).then(audioUrl => {
                    const audioElement = document.getElementById('audio');
                    audioElement.src = audioUrl;
                    audioElement.addEventListener('loadedmetadata', () => {
                        audioElement.play();
                        setIsPlaying(true);

                        setTimeout(() => setIsPlaying(false), audioElement.duration * 1000);
                    });

                    setIsPlaying(true);
                }).catch(error => {
                    console.error(error);
                });
            }} />
            <audio style={{display: "none"}} id="audio" controls></audio>
        </>
}
        </>
    );
}

export default TextToSpeech;