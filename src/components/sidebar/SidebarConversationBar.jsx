import SidebarConversation from "./SidebarConversation";

function SidebarConversationBar ({text}) {
    return(
        <div className='conversations'>
        <div className='header'>{text}</div>

        <SidebarConversation text="Testimoniasl" />
        <SidebarConversation text="TestimoniaslTestimoniaslTestimoniaslTestimoniasl" />
        <SidebarConversation text="Testimoniasl" />

      </div>
    );
}

export default SidebarConversationBar;