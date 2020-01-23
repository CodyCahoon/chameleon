import React from 'react';
import './Light.scss';
import { ILight } from '../../interfaces/grid';

const Light = (props: ILight) => {
    return (
        <div className="light">
            <span className="light__source" style={{ backgroundColor: props.color }}></span>
        </div>
    );
};

export default Light;
