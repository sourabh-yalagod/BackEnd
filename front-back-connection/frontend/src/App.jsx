import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
      axios.get('/api/jokes')
      .then((res) => setJokes(res.data))
      .catch((error) => console.error('Error fetching jokes:', error));
    
    });

    return (
        <div>
            <h1>Jokes</h1>
            <ul>
                {jokes.map(joke => (
                    <div key={joke.id}>
                        <h1>{joke.content}</h1>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
