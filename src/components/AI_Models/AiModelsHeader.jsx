import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AiModelsHeader ({icon}) {
    return (
        <header>
            <span>Model</span>
            <FontAwesomeIcon icon={icon} />
        </header>
    );
}

export default AiModelsHeader;