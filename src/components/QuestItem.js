import React from 'react';
import './QuestItem.css';
import frameImg from '../images/frame.png';
import doneImg from '../images/done.png';
import exIcon from "../images/ex.png";
import ggIcon from "../images/gg.png";
import arrowIcon from "../images/arrow-icon.png"

const QuestItem = ({ quest }) => {
    return (
        <div className={`quest-item ${quest.completed ? 'completed' : ''}`}>
            <img src={quest.completed ? doneImg : frameImg} alt={quest.completed ? "Done" : "Frame"} className="frame-img" />
            <div className="quest-details">
                <div className="quest-name">{quest.name}</div>
                {!quest.completed && <div className="quest-time">{quest.time}</div>}
            </div>
            <div className="xp-container">
                <img src={exIcon} alt="EX Icon" className="ex-icon" />
                <div className="xp-circle">
                    <div className="xp-text">999k</div>
                </div>
                <img src={quest.completed ? ggIcon : arrowIcon} alt="Icon" className={quest.completed ? "gg-icon" : "arrow-icon"} />
            </div>
        </div>
    );
}

export default QuestItem;
