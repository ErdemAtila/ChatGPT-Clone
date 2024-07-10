import SidebarConversation from "./SidebarConversation";
import { determineDateCategory } from "../../commonFunctions";

function SidebarConversationBar ({setIsTemporary ,text, setLastResponse, setCurrentConversation, setData, data, currConversation}) {
  const getConversationList = () => {
    return data.map(item => {return {"name" : item.name, id: item.id, date: item.date, isArchieved: item.isArchieved ,category: determineDateCategory(item.date)}});
  }
    return(
      <div className='conversations'>
        <div className='header'>{text}</div>

        {
          getConversationList().reverse().map(conv => {return conv.category == text && !conv.isArchieved ? <SidebarConversation setIsTemporary={setIsTemporary} setLastResponse={setLastResponse} key={conv.id} currConversation={currConversation} setData={setData} text={conv.name} id={conv.id} setCurrentConversation={setCurrentConversation}/> : null})
        }

      </div>
    );
}

export default SidebarConversationBar;