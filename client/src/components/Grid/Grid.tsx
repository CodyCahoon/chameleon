import React from 'react';
import './Grid.scss';

export interface Topic {
    category: string;
    words: string[];
}

export interface IGrid {
    topic: Topic;
}

const Grid = (props: IGrid) => {
    const { topic } = props;

    if (!topic) {
        return null;
    }
    const rows = [
        topic.words.slice(0, 4),
        topic.words.slice(4, 8),
        topic.words.slice(8, 12),
        topic.words.slice(12, 16),
    ];

    const renderWord = (word: string, index: number, rowIndex: number) => {
        const wordClass =
            (rowIndex + index) % 2 === 0
                ? 'grid__cell grid__cell--blue'
                : 'grid__cell grid__cell--white';

        return (
            <div className={wordClass} key={index}>
                {word}
            </div>
        );
    };

    const renderRow = (words: string[], index: number) => {
        return (
            <div className="grid__row" key={index}>
                {words.map((w, i) => renderWord(w, i, index))}
            </div>
        );
    };

    return <div className="grid">{rows.map(renderRow)}</div>;
};

export default Grid;
