import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


function SidebarHeader () {
    return (
    <header>
        <FontAwesomeIcon icon={faTableCellsLarge} />
        <FontAwesomeIcon icon={faPenToSquare} />
    </header>
    );
}

export default SidebarHeader;