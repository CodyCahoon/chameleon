import express from 'express';
import ws from 'ws';
import http from 'http';
import { GameService } from './services/game.service';

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });
const port = 8080;

const gameService = new GameService();

app.post('/game', (req, res) => {
    res.send({
        data: gameService.createGame(),
    });
});

server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
