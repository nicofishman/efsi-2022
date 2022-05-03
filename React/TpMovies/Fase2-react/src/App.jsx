import { useState } from 'react'
import './App.css'
import SearchMovieInput from './Components/SearchMovieInput.jsx'
import MovieSection from './Components/MovieSection'
import movies from '../movies_test.json'

function App() {
    const API_KEY = "8cbcae6e6a57f619c72f01584c61e53c"
    console.log(movies)

    return (
        <div className="App">
            <h1>Movie Search</h1>
            <SearchMovieInput></SearchMovieInput>
            <MovieSection title='Most Watched' movies={movies}></MovieSection>
        </div>
    )
}

export default App
