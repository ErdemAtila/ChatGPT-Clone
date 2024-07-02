import { faStar, faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import AiModel from './AiModel';
import TemporaryChat from './TemporaryChat';
import AiModelsHeader from './AiModelsHeader';

function AiModelsBar() {
    return(
      <div className='models'>
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