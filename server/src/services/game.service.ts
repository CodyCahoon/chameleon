import { topics } from '../topics/all';
import { Util } from '../util';

export interface Topic {
    category: string;
    words: string[];
}

export interface Game {
    id: string;
    die1?: number;
    die2?: number;
    topic: Topic;
}

export class GameService {
    private games = new Map<string, Game>();

    public createGame(): Game {
        const newGame: Game = {
            id: GameService.generateGameId(),
            topic: GameService.generateTopic(),
            die1: GameService.rollDie(6),
            die2: GameService.rollDie(8),
        };
        this.games.set(newGame.id, newGame);
        return newGame;
    }

    public rollDice(gameId: string): Game {
        const game = { ...this.games.get(gameId) };

        game.die1 = GameService.rollDie(6);
        game.die2 = GameService.rollDie(8);

        this.games.set(gameId, game);
        return game;
    }

    private static generateTopic(): Topic {
        const index = Util.randomNumber(topics.length);
        const topic = topics[index];

        return {
            category: topic.category,
            words: Util.shuffle(topic.words),
        };
    }

    private static rollDie(sides = 6): number {
        return Util.randomNumber(sides) + 1;
    }

    private static generateGameId(): string {
        const num = () => Util.randomNumber(10);
        return [num(), num(), num(), num()].join('');
    }
}
