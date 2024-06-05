import React from 'react';
import './QuestHeader.css';
import closeIcon from '../images/close.png';

const QuestHeader = () => {
    return (
        <div className="quest-header">
            <div className="header-top">
                <div className="header-title-container">
                    <h1 className="header-title">Daily Quests</h1>
                </div>
                <img src={closeIcon} alt="Close" className="close-icon" />
            </div>
            <div className="header-bottom">
                <p className="sub-title">Add your tasks to quests</p>
                <button className="place-ads-btn">PLACE MY ADS</button>
            </div>
        </div>
    );
}

export default QuestHeader;
