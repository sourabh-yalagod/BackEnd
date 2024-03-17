import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to the Home page');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'First joke', content: 'Joke 1' },
        { id: 2, title: 'Second joke', content: 'Joke 2' },
        { id: 3, title: 'Third joke', content: 'Joke 3' },
        { id: 4, title: 'Fourth joke', content: 'Joke 4' },
        { id: 5, title: 'Fifth joke', content: 'Joke 5' }
    ];
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is on http://localhost:${port}`);
});

export default app;
