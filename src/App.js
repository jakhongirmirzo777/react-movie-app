import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import http from "./plugins/axios";
import './App.css';

function App() {
    const [movies, setMovies] = useState([])
    const fetchMoviesList = useCallback(async () => {
        try {
            const {data: {results}} = await http.get('/films')
            setMovies(results)
        } catch (err) {
            console.log(err)
        }
    }, [])
    useEffect(() => {
        fetchMoviesList()
    }, [fetchMoviesList])
    return (
        <React.Fragment>
            <section>
                <button>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies}/>
            </section>
        </React.Fragment>
    );
}

export default App;
