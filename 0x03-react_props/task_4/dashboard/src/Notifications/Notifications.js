import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


function Notifications({ displayDrawer }) {
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
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                    <button onClick={handleClick} aria-label="Close" style={{
                        background: 'transparent',
                        border: 'none',
                        right:20,
                        position:'absolute',
                        top:60,
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
};

Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;