import React from 'react';
import QuestItem from './QuestItem';
import './QuestList.css';

const QuestList = ({ quests }) => {
    return (
        <div className="quest-list">
            {quests.map(quest => (
                <QuestItem key={quest.id} quest={quest} />
            ))}
        </div>
    );
}

export default QuestList;
