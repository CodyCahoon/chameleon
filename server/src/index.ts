import express from 'express';
import ws from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server });
const port = 8080;

wss.on('connection', (ws: WebSocket) => {
   
    ws.onmessage = (ev: MessageEvent) => {
        const event = JSON.parse(ev.data);

        switch (event.type) {
           
        }
    };
});

server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
