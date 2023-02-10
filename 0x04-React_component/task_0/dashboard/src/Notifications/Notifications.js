import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


function Notifications({ displayDrawer, listNotifications }) {
    function handleClick() {
        console.log("Close button has been clicked")
    }

    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 && (
                            <NotificationItem value="No new notification for now" />
                        )}
                        {listNotifications.map((notification) => (
                            <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                        ))}
                    </ul>
                    <button onClick={handleClick} aria-label="Close" style={{
                        background: 'transparent',
                        border: 'none',
                        right: 20,
                        position: 'absolute',
                        top: 60,
                    }}
                    >
                        <img src={closeIcon} className="closeIcon" alt="closeIcon" style={{
                            height: 10
                        }} />
                    </button>
                </div>
            )}
        </>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;