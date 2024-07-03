import { faCertificate, faUsersRays, faBook, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import ProfilePopupOption from './ProfilePopupOption';
import React, { useRef, useEffect } from 'react';


function ProfilePopup ({ isOpen, onClose }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div ref={popupRef} className='profile'>
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