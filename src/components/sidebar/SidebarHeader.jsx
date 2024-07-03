import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import SidebarOpenCloseBtn from './SidebarOpenCloseBtn';


function SidebarHeader ({setIsSidebarOpened, isSidebarOpened}) {

    return (
    <header>
        <SidebarOpenCloseBtn setIsSidebarOpened={setIsSidebarOpened} isSidebarOpened={isSidebarOpened} />
        {/* <FontAwesomeIcon onClick={() => sidebarBtnHandler(setIsSidebarOpened)} icon={faTableCellsLarge} /> */}
        
        <div className='tooltip-container'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <span class="tooltip-text">New Chat</span>
        </div>
    </header>
    );
}

export default SidebarHeader;