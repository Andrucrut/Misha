import React from 'react';
import './QuestHeader.css';
import closeIcon from '../images/close.png';

const QuestHeader: React.FC = () => {
    return (
        <div className="quest-header">
            <div className="header-top">
                <div className="header-title-container">
                    <h1 className="header-title">Daily Quests</h1>
                </div>
            </div>

            <img src={closeIcon} alt="Close" className="close-icon" />
            <div className="columns-container">
                <div className="column left-column"></div>
                <div className="column right-column"></div>
            </div>
            <div className="daily-quests-divider"></div>
        </div>

    );
}

export default QuestHeader;
