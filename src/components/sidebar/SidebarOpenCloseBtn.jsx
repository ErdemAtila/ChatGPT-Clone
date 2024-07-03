import {sidebarBtnHandler} from "../../commonFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

function SidebarOpenCloseBtn ({setIsSidebarOpened, isSidebarOpened}) {
    return (
        <div className="tooltip-container">
            <FontAwesomeIcon onClick={() => sidebarBtnHandler(setIsSidebarOpened)} icon={faTableCellsLarge} />
            {
            isSidebarOpened ? 
            <span class="tooltip-text left">Open Slidebar</span> : 
            <span class="tooltip-text left">Close Slidebar</span>}
        </div>
    );
}

export default SidebarOpenCloseBtn;