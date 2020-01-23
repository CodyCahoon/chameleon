import React from 'react';
import './App.scss';
import Grid from './components/Grid/Grid';
import { grid1 } from './interfaces/grid';

const App: React.FC = () => {
    const renderThis = grid1;

    return (
        <div className="app">
            <Grid {...renderThis} />
        </div>
    );
};

export default App;
