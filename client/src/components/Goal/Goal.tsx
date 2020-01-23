import React from 'react';
import './Goal.scss';
import { IGoal } from '../../interfaces/grid';

const Goal = (props: IGoal) => {
    return (
        <div className="goal">
            <span className="goal__dest" style={{ backgroundColor: props.color }}></span>
        </div>
    );
};

export default Goal;
