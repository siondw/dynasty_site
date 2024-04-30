import React from 'react';
import TeamHeader from './components/TeamHeader/TeamHeader';
import './styles.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const mockTeamData = {
    id: '4',
    owner: 'Sion',
    finishPosition: '5th',
    strengths: 'RB',
    needs: 'QB, WR',
    faab: '230'
};

function App() {
    return (
        <div className="App">
            <HomeScreen />
        </div>
    );
}

export default App;

