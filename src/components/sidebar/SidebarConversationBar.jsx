import SidebarConversation from "./SidebarConversation";

function SidebarConversationBar ({text}) {
    return(
        <div className='conversations'>
        <div className='header'>{text}</div>

        <SidebarConversation text="Testimoniasl" id={1}/>
        <SidebarConversation text="TestimoniaslTestimoniaslTestimoniaslTestimoniasl" id={2}/>
        <SidebarConversation text="Testimoniasl" id={3}/>

      </div>
    );
}

export default SidebarConversationBar;