import { faLightbulb, faPenClip, faPlaneDeparture, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

import Recommendation from '../Recommendation';

function RecommendationBar ({ submitBtnRef, inputRef}) {
    return(
    <div className='recommendations'>
        <Recommendation inputRef={inputRef} submitBtnRef={submitBtnRef}  icon={faLightbulb} text="Recipe with what's in my kitchen" />
        <Recommendation inputRef={inputRef}  submitBtnRef={submitBtnRef}  icon={faPenClip} text="Text inviting friend to wedding" />
        <Recommendation inputRef={inputRef}  submitBtnRef={submitBtnRef}  icon={faPlaneDeparture} text="Experience Seoul like a local" />
        <Recommendation inputRef={inputRef} submitBtnRef={submitBtnRef}  icon={faSuitcaseRolling} text="Fun fact about the Roman Empire" />
      </div>
    );
}

export default RecommendationBar;