import React, { useState } from 'react';
import './App.scss';
import Grid, { Topic } from './components/Grid/Grid';
import Dice from './components/Dice/Dice';

export interface Game {
    id: string;
    die1?: number;
    die2?: number;
    topic: Topic;
}

const App = () => {
    const [game, setGame] = useState({} as Game);

    const createGame = () => {
        fetch('game', { method: 'post' })
            .then(r => r.json())
            .then(g => {
                setGame(g.data);
            });
    };

    const renderDice = () => {
        if (!game) {
            return null;
        }

        const { die1, die2 } = game;
        if (!die1 || !die2) {
            return null;
        }

        return <Dice die1={game.die1!} die2={game.die2!}></Dice>;
    };

    const renderCategory = () => {
        if (!game || !game.topic) {
            return null;
        }
        return <h1 className="category">{game.topic.category}</h1>;
    };

    return (
        <div className="app">
            <button onClick={createGame}>New Game</button>
            {renderCategory()}
            <Grid topic={game.topic}></Grid>
            {renderDice()}
        </div>
    );
};

export default App;
