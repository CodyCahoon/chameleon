import React from 'react';
import './Grid.scss';
import Tile from '../Tile/Tile';
import { IGrid, ILight, IGoal } from '../../interfaces/grid';
import Light from '../Light/Light';
import Goal from '../Goal/Goal';

const Grid = (props: IGrid) => {
    const renderGrid = () => {
        return new Array(props.width).fill(null).map((_, row: number) => {
            const columns = new Array(props.height).fill(null).map((_, col: number) => {
                const key = `${row}-${col}`;

                // Light
                if (props.lights.has(key)) {
                    const light = props.lights!.get(key) as ILight;
                    return (
                        <td>
                            <Light {...light} />
                        </td>
                    );
                }

                // Goal
                if (props.goals.has(key)) {
                    const goal = props.goals!.get(key) as IGoal;
                    return (
                        <td>
                            <Goal {...goal} />
                        </td>
                    );
                }

                // Tile
                return (
                    <td>
                        <Tile />
                    </td>
                );
            });
            return <tr>{columns}</tr>;
        });
    };

    return (
        <table className="grid">
            <tbody>{renderGrid()}</tbody>
        </table>
    );
};

export default Grid;
