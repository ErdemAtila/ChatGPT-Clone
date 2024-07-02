import { faCube } from '@fortawesome/free-solid-svg-icons';

import SidebarGpt from './SidebarGpt';


function SidebarGptsBar () {
    return (
    <div className='gpts'>
        <SidebarGpt icon={faCube} text="ChatGPT" />
        <SidebarGpt icon={faCube} text="Image Generator" />
        <SidebarGpt icon={faCube} text="ChatGPT" />
        <SidebarGpt icon={faCube} text="ChatGPT" />

    </div>
    );
}
export default SidebarGptsBar;