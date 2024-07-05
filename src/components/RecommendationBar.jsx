import { faLightbulb, faPenClip, faPlaneDeparture, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

import Recommendation from '../Recommendation';

function RecommendationBar ({setPromptText, submitBtnRef, setData, setCurrentConversation}) {
    return(
    <div className='recommendations'>
        <Recommendation setCurrentConversation={setCurrentConversation} setData={setData} submitBtnRef={submitBtnRef} setPromptText={setPromptText} icon={faLightbulb} text="Recipe with what's in my kitchen" />
        <Recommendation setCurrentConversation={setCurrentConversation} setData={setData} submitBtnRef={submitBtnRef} setPromptText={setPromptText} icon={faPenClip} text="Text inviting friend to wedding" />
        <Recommendation setCurrentConversation={setCurrentConversation} setData={setData} submitBtnRef={submitBtnRef} setPromptText={setPromptText} icon={faPlaneDeparture} text="Experience Seoul like a local" />
        <Recommendation setCurrentConversation={setCurrentConversation} setData={setData} submitBtnRef={submitBtnRef} setPromptText={setPromptText} icon={faSuitcaseRolling} text="Fun fact about the Roman Empire" />
      </div>
    );
}

export default RecommendationBar;