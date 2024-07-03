import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import SidebarOpenCloseBtn from './SidebarOpenCloseBtn';


function SidebarHeader ({setIsSidebarOpened, isSidebarOpened}) {

    return (
    <header>
        <SidebarOpenCloseBtn setIsSidebarOpened={setIsSidebarOpened} />
        {/* <FontAwesomeIcon onClick={() => sidebarBtnHandler(setIsSidebarOpened)} icon={faTableCellsLarge} /> */}
        <FontAwesomeIcon icon={faPenToSquare} />
    </header>
    );
}

export default SidebarHeader;