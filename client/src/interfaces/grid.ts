export enum Direction {
    Any,
    East,
    North,
    South,
    West,
}

export interface ILight {
  direction: Direction;
  color: string;
}

export interface IGoal {
    direction: Direction;
    color: string;
    isComplete: boolean;
}

export interface IGrid {
    width: number;
    height: number;
    lights: Map<string, ILight>;
    goals: Map<string, IGoal>;
}

export const grid1: IGrid = {
    width: 10,
    height: 10,
    lights: new Map([
        ['0-0', { direction: Direction.South, color: 'red' }]
    ]),
    goals: new Map([
        ['9-9', { direction: Direction.Any, color: 'red', isComplete: false }]
    ]),
} ;