import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function TemporaryChat () {
    return (
    <div className='model'>
        <div>
        <FontAwesomeIcon icon={faComment} />
          <div className='information'>
            <p>Temporary Chat</p>
            <p></p>
          </div>
        </div>
        <div className="checkboxes__item">
          <label className="checkbox style-e">
            <input type="checkbox"/>
            <div className="checkbox__checkmark"></div>
          </label>
        </div>
      </div>
    );
}

export default TemporaryChat;