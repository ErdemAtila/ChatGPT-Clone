import SidebarConversation from "./SidebarConversation";
import { determineDateCategory } from "../../commonFunctions";

function SidebarConversationBar ({text, setCurrentConversation, setData, data, currConversation}) {
  const getConversationList = () => {
    return data.map(item => {return {"name" : item.name, id: item.id, date: item.date, isArchieved: item.isArchieved ,category: determineDateCategory(item.date)}});
  }
    return(
      <div className='conversations'>
        <div className='header'>{text}</div>

        {
          getConversationList().map(conv => {return conv.category == text && !conv.isArchieved ? <SidebarConversation key={conv.id} currConversation={currConversation} setData={setData} text={conv.name} id={conv.id} setCurrentConversation={setCurrentConversation}/> : null})
        }

      </div>
    );
}

export default SidebarConversationBar;