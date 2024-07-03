import { faLightbulb, faPenClip, faPlaneDeparture, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

import Recommendation from '../Recommendation';

function RecommendationBar ({setPromptText}) {
    return(
    <div className='recommendations'>
      <span>
        <Recommendation icon={faLightbulb} text="Recipe with what's in my kitchen" />
      </span>
        <Recommendation icon={faPenClip} text="Text inviting friend to wedding" />
        <Recommendation icon={faPlaneDeparture} text="Experience Seoul like a local" />
        <Recommendation icon={faSuitcaseRolling} text="Fun fact about the Roman Empire" />
      </div>
    );
}

export default RecommendationBar;