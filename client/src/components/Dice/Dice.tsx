import React from 'react';
import './Dice.scss';

export interface IDice {
    die1: number;
    die2: number;
}

const Dice = (props: IDice) => {
    const { die1, die2 } = props;

    if (!die1 || !die2) {
        return null;
    }

    return (
        <div className="dice">
            <div className="dice__item">{die1}</div>
            <div className="dice__item">{die2}</div>
        </div>
    );
};

export default Dice;
