import { faCube, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

import SidebarGpt from './SidebarGpt';


function SidebarGptsBar ({setCurrentConversation}) {
    return (
    <div className='gpts'>
        <SidebarGpt icon={faCube} text="ChatGPT" setCurrentConversation={setCurrentConversation}/>
        <SidebarGpt icon={faCube} text="Image Generator" setCurrentConversation={setCurrentConversation}/>
        <SidebarGpt icon={faBoxesStacked} text="Explore GPTs" setCurrentConversation={setCurrentConversation}/>
    </div>
    );
}
export default SidebarGptsBar;