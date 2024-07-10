import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faPencil, faBoxArchive, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { getData, saveToDB } from '../../commonFunctions';

function SidebarConvOptions({editId, setCurrentConversation, id, closeEditPopup, setIsRenamed, editInputRef, setData}) {
    const focusAndMoveCursorToEnd = (element) => {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        element.focus();
    };

    const deleteHandler = (id) => {
        let newData = getData().filter(item => item.id != id);

        setData(newData);
        saveToDB(newData);

        setCurrentConversation(currId => currId == id ? 0 : currId);
      }

    const archieveHandler = (e, id) => {
        e.stopPropagation(); 
        closeEditPopup()
        let newData = getData().map(item => item.id == id ? {...item, isArchieved: true} : item);

        setData(newData);
        saveToDB(newData);
    }


    return (
        <div className="edit-menu show">
            <div className='row' onClick={(e) => {e.stopPropagation(); console.log("Share"); closeEditPopup()}}>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <span>Share</span>
            </div>
            <div className='row' onClick={(e) => {e.stopPropagation(); closeEditPopup(); setIsRenamed(true);
                setTimeout(() => {
                    focusAndMoveCursorToEnd(editInputRef.current);
                }, 0);}}>
                <FontAwesomeIcon icon={faPencil} />
                <span>Rename</span>
            </div>
            <div className='row' onClick={(e) => archieveHandler(e, id)}>
                <FontAwesomeIcon icon={faBoxArchive} />
                <span>Archive</span>
            </div>
            <div className='row' onClick={(e) => {e.stopPropagation(); closeEditPopup(); deleteHandler(id)}}>
                <FontAwesomeIcon icon={faTrashCan} />
                <span>Delete</span>
            </div>
        </div> 
    );
}

export default SidebarConvOptions;