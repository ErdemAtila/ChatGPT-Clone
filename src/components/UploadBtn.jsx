import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';


function UploadBtn() {
    return (
    <div>
        <input type="file" id="upload" hidden/>
        <label className='upload-label' for="upload"><FontAwesomeIcon icon={faPaperclip}/></label>
    </div>
    );
}

export default UploadBtn;