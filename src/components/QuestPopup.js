import React from 'react';
import './QuestPopup.css';
import exIcon from '../images/ex.png';

const QuestPopup = ({ quest, onClose }) => {
    const isTelegramQuest = quest.name === 'Подпишись на телеграм канал';
    return (
        <div className={`quest-popup ${isTelegramQuest ? 'telegram' : ''}`}>
            <div className="quest-popup-content">
                <div className="quest">
                    <p>{quest.name}</p>
                    <p>
                        Reward: 999k
                        <img src={exIcon} alt="XP Icon" className="xp-icon" />
                    </p>
                </div>
                <div className="buttons">
                    <button onClick={onClose} className="confirm-button">CONFIRM</button>
                    <button className="go-button">GO</button>
                </div>
            </div>
        </div>
    );
}

export default QuestPopup;
