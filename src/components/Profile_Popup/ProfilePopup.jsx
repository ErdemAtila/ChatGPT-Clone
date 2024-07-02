import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faUsersRays, faBook, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import ProfilePopupOption from './ProfilePopupOption';

function ProfilePopup () {
    return (
        <div className='profile'>
            <ProfilePopupOption icon={faCertificate} text="My Plan" />
            <ProfilePopupOption icon={faUsersRays} text="My GPTs" />
            <ProfilePopupOption icon={faBook} text="Customize ChatGPT" />
            <ProfilePopupOption icon={faGear} text="Settings ChatGPT" />
                <hr />
            <ProfilePopupOption icon={faArrowRightFromBracket} text="Log out" />
        </div>
    );
}

export default ProfilePopup;