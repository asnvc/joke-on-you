import "./App.scss";
import { useEffect, useState } from 'react';
import Joke from './Components/Joke';

export default function App() {
    const [jokes, setJokes] = useState(null);
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setJokes(result.jokes);
                },
                (error) => {}
            );
    }, []);
    return (
        <div className="App">
            <div className="App-header ">
                {jokes?.map((item) => (
                    <Joke key={item.id} joke={item} />
                ))}
            </div>
        </div>
    );
}