import { findConversationById } from "../../commonFunctions";
import UserDialog from "./UserDialog";
import AssistantDialog from "./AssistantDialog";
import { v4 as uuidv4 } from 'uuid';



function MainConversation({currConversationId}) {
    let dialogs = findConversationById(currConversationId)[0].conversation;

    console.log(dialogs);
    return(
        <div className="main-conversation">
            {
                dialogs.map((item, index) => item.role == "user" ? <UserDialog key={uuidv4()}  text={item.content} /> : <AssistantDialog key={uuidv4()} text={item.content} />             )
            }
        </div>
    );
}

export default MainConversation;