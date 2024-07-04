
import UserDialogEditBtn from './UserDialogEditBtn';

function UserDialog({text}) {
    return(            
    <div className="user-dialog">
        <UserDialogEditBtn />
        {text}
    </div>
    );
}

export default UserDialog;