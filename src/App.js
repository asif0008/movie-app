import React from "react";
import {useState, useEffect} from "react";   
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=abcb701a';

const App = () => {

    /* Github for code : https://gist.github.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1 */

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Your Movie App</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                 />
            </div>

            {movies?.length > 0 
            ? (<div className="container">
                 {movies.map((movie) => ( 
                    <MovieCard movie={movie} />
             ))}
            </div>
            ) : (
              <div className="empty">
                    <h2>No movies found</h2>
              </div>
            )
            };
        </div>
    );
};

export default App;