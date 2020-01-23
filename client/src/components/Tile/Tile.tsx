import React, { useState } from 'react';
import './Tile.scss';

export enum TileType {
    Combiner,
    Default,
    Extracter,
    Light,
    Mirror,
}

export interface ITile {
    color?: string;
    rotation?: number;
    type?: TileType;
}

export enum Direction {
    North,
    South,
    East,
    West,
}

export interface Flow {
    in: Direction;
    out: Direction;
}

export interface Tile2 {
    flows: Set<Flow>;
}

const Tile = (props: ITile) => {
    const [rotation, setRotation] = useState(props.rotation || 0);

    const rotate = () => {
        const newRotation = rotation === 270 ? 0 : rotation + 90;
        setRotation(newRotation);
    };

    const getClassName = () => {
        return `tile tile--rotate--${rotation}`;
    };

    return <button className={getClassName()} onClick={rotate}></button>;
};

export default Tile;
