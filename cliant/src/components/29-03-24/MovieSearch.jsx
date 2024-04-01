import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://online-movie-database.p.rapidapi.com/auto-complete', {
                params: { q: query },
                headers: {
                    'X-RapidAPI-Key': '7de4ed48e2msh6e4706ab2486e4bp1b5908jsn239d6131e5df',
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                }
            });
            console.log(response.data, "response.data");
            setSearchResults(response.data.d); // Update to response.data.d
            setLoading(false);
            setQuery("")
        } catch (error) {
            console.error('Error searching movies:', error);
            setError('Error searching movies. Please try again.');
            setLoading(false);
        }
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query) {
            searchMovies();
        } else {
            setError('Please enter a search query.');
        }
    };

    return (
        <div className="movie-search-container">
            <h2>Movie Search</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleQueryChange} placeholder="Enter movie name" />
                <button className='ButtonColor' type="submit" disabled={loading}>Search</button>
            </form>
            <h2>Search Results</h2>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((movie) => (
                        <li key={movie.id}>
                            <img src={movie.i.imageUrl} alt={movie.l} />
                            <p>Title: {movie.l}</p>
                            <p>Year: {movie.y}</p>
                            <p>Actors: {movie.s}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MovieSearch;

