import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils.js'


function Notifications() {
    function handleClick() {
        console.log("Close button has been clicked")
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">{getLatestNotification()}</li>
            </ul>
            <button onClick={handleClick} aria-label="Close" style={{
                background:'transparent',
                border:'none',
                display: 'inline',
                right: 20,
                top:20,
                position: 'absolute',
            }}>
                <img src={closeIcon} className="closeIcon" alt="closeIcon" style={{
                height:10
            }}/>
            </button>
        </div>
    );
};

export default Notifications;