import React, { useState } from 'react';
import QuestHeader from './components/QuestHeader';
import QuestFilter from './components/QuestFilter';
import QuestList from './components/QuestList';
import HeaderBottom from './components/HeaderBottom';
import QuestPopup from './components/QuestPopup';
import './App.css';

const App = () => {
    const [quests, setQuests] = useState([
        { id: 1, name: 'Veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long quest name', completed: true, xp: "999k", time: '13h 59m' },
        { id: 2, name: 'Long quest name', completed: true, xp: "999k", time: '13h 59m' },
        { id: 3, name: 'Подпишись на телеграм канал', completed: false, xp: "999k", time: '13h 59m' },
        { id: 4, name: 'Very long quest name', completed: false, xp: "999k", time: '13h 59m' },
        { id: 5, name: 'Veeeeeeeeeeeeeeeeeeeeeeeeeeeeery long quest name', completed: false, xp: "999k", time: '13h 59m' },
        { id: 6, name: 'Quest name', completed: false, xp: "999k", time: '13h 59m' },
        { id: 7, name: 'Quest name', completed: false, xp: "999k", time: '13h 59m' },
    ]);

    const [filter, setFilter] = useState('all');
    const [selectedQuest, setSelectedQuest] = useState(null);

    const filteredQuests = quests.filter(quest => filter === 'all' || (filter === 'completed' && quest.completed));

    const handleQuestClick = (quest) => {
        setSelectedQuest(quest);
    };

    const closePopup = () => {
        setSelectedQuest(null);
    };

    return (
        <div className="app-container">
            <div className="app">
                <QuestHeader />
                <HeaderBottom />
                <QuestFilter filter={filter} setFilter={setFilter} />
                <QuestList quests={filteredQuests} onQuestClick={handleQuestClick} />
                {selectedQuest && <QuestPopup quest={selectedQuest} onClose={closePopup} />}
            </div>
        </div>
    );
}

export default App;
