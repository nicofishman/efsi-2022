import React from 'react'
import SearchMovieInput from './Components/SearchMovieInput.jsx'
import MovieSection from './Components/MovieSection'
import movies from '../movies_test.json'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function App() {
    const API_KEY = "8cbcae6e6a57f619c72f01584c61e53c"
    const mostSearchedFilters = ['En Streaming', 'En Televisión', 'En Alquiler', 'En Cines']
    const topRatedFilters = ['Hoy', 'Esta Semana']
    return (
        <Box className="App" sx={{
            overflowX: 'hidden',
        }}>
            <Typography sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                my: 2
            }}>Movie Search</Typography>
            <SearchMovieInput />
            <MovieSection title='Lo Más Buscado' movies={movies.most_searched.results} filters={mostSearchedFilters}></MovieSection>
            <MovieSection title='Lo Mejor Rateado' movies={movies.top_rated.results} filters={topRatedFilters}></MovieSection>
        </Box>
    )
}

export default App
