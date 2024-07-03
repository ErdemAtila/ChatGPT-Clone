import { faCube } from '@fortawesome/free-solid-svg-icons';

import SidebarGpt from './SidebarGpt';


function SidebarGptsBar () {
    return (
    <div className='gpts'>
        <SidebarGpt icon={faCube} text="ChatGPT" id={34} />
        <SidebarGpt icon={faCube} text="Image Generator" id={35}/>
        <SidebarGpt icon={faCube} text="ChatGPT" id={36}/>
        <SidebarGpt icon={faCube} text="ChatGPT" id={37}/>
    </div>
    );
}
export default SidebarGptsBar;