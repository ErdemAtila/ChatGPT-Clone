import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AiModel ({leftIcon, rightIcon, modelName, modelDesc, setAIModel}) {
    return(
    <div className='model' onClick={() => setAIModel(modelName)} >
        <div>
          <FontAwesomeIcon icon={leftIcon} />
          <div className='information'>
            <p>{modelName}</p>
            <p>{modelDesc}</p>
          </div>
        </div>
        {
            rightIcon 
            ?
            <FontAwesomeIcon icon={rightIcon} />
            :
            null
        }
      </div>
    );
}

export default AiModel;