import {sidebarBtnHandler} from "../../commonFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

function SidebarOpenCloseBtn ({setIsSidebarOpened, isSidebarOpened}) {
    return (
        <div className="tooltip-container" onClick={() => sidebarBtnHandler(setIsSidebarOpened)}>
            <FontAwesomeIcon  icon={faTableCellsLarge} />
            {
            isSidebarOpened ? 
            <span className="tooltip-text left">Open Slidebar</span> : 
            <span className="tooltip-text left">Close Slidebar</span>}
        </div>
    );
}

export default SidebarOpenCloseBtn;