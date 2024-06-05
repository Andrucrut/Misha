import React from 'react';
import './QuestFilter.css';
import exIcon from '../images/ex.png';

const QuestFilter = ({ filter, setFilter, xp }) => {
    return (
        <div className="quest-filter">
            <div className="toggle-container">
                <div className={`toggle-switch ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter(filter === 'completed' ? 'all' : 'completed')}>
                    <div className={`toggle-label all ${filter === 'all' ? 'selected' : ''}`}>All</div>
                    <div className={`toggle-label completed ${filter === 'completed' ? 'selected' : ''}`}>Completed</div>
                    <div className="toggle-thumb"></div>
                </div>
            </div>
            <div className="xp-contain">
                <img src={exIcon} alt="EX Icon" className="ex-icon" />
                <div className="xp-circle">
                    <div className="xp-text">{"999k"}</div>
                </div>
            </div>
        </div>
    );
}

export default QuestFilter;
