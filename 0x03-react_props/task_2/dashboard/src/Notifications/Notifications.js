import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


function Notifications() {
    function handleClick() {
        console.log("Close button has been clicked")
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
            </ul>
            <button onClick={handleClick} aria-label="Close" style={{
                background: 'transparent',
                border: 'none',
                display: 'inline',
                right: 20,
                top: 20,
                position: 'absolute',
            }}>
                <img src={closeIcon} className="closeIcon" alt="closeIcon" style={{
                    height: 10
                }} />
            </button>
        </div>
    );
};

export default Notifications;