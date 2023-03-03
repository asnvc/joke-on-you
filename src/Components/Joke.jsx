function Joke({joke}){
    return(
        <div className="joke">
            <ul>
                <ol>
                    <h2>{joke.joke}</h2>
                </ol>
                <ol>
                    <h2>{joke.setup}</h2>
                    <h2>{joke.delivery}</h2>
                </ol>
            </ul>
        </div>
    );
}

export default Joke;