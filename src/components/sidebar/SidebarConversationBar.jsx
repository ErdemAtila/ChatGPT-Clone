import SidebarConversation from "./SidebarConversation";
import { getConversationList } from "../../commonFunctions";

function SidebarConversationBar ({text, setCurrentConversation}) {
    return(
      <div className='conversations'>
        <div className='header'>{text}</div>

        {
          getConversationList().map(conv => {return conv.category == text ? <SidebarConversation key={conv.id} text={conv.name} id={conv.id} setCurrentConversation={setCurrentConversation}/> : null})
        }

      </div>
    );
}

export default SidebarConversationBar;