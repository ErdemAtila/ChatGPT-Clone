import {sidebarBtnHandler} from "../../commonFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

function SidebarOpenCloseBtn ({setIsSidebarOpened}) {
    return (
        <FontAwesomeIcon onClick={() => sidebarBtnHandler(setIsSidebarOpened)} icon={faTableCellsLarge} />
    );
}

export default SidebarOpenCloseBtn;