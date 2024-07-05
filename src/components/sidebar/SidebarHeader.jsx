import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import SidebarOpenCloseBtn from './SidebarOpenCloseBtn';


function SidebarHeader ({setIsSidebarOpened, isSidebarOpened, setCurrentConversation}) {

    return (
    <header>
        <SidebarOpenCloseBtn setIsSidebarOpened={setIsSidebarOpened} isSidebarOpened={isSidebarOpened} />
        {/* <FontAwesomeIcon onClick={() => sidebarBtnHandler(setIsSidebarOpened)} icon={faTableCellsLarge} /> */}
        
        <div className='tooltip-container' onClick={() => setCurrentConversation(0)}>
            <FontAwesomeIcon icon={faPenToSquare} />
            <span className="tooltip-text">New Chat</span>
        </div>
    </header>
    );
}

export default SidebarHeader;