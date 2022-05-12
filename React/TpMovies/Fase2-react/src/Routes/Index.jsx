import React, { useEffect, useState } from 'react'
import SearchMovieInput from '../Components/SearchMovieInput.jsx'
import MovieSection from '../Components/MovieSection'
import movies from '../../movies_test.json'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { movieById } from '../FetchFunctions'


function App() {
    const mostSearchedFilters = ['En Streaming', 'En Televisión', 'En Alquiler', 'En Cines']
    const topRatedFilters = ['Hoy', 'Esta Semana']
    const [mostSearchedMovies, setMostSearchedMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const mostSearched = await movieById('popular')
            const topRated = await movieById('top_rated')
            const upcoming = await movieById('upcoming')
            console.log(mostSearched.results)
            setMostSearchedMovies(mostSearched.results)
            setTopRatedMovies(topRated.results)
            setUpcomingMovies(upcoming.results)
        }
        fetchMovies()
    }, [])

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
            <MovieSection title='Lo Más Buscado' movies={mostSearchedMovies} filters={mostSearchedFilters}></MovieSection>
            <MovieSection title='Lo Mejorcito' movies={topRatedMovies} filters={topRatedFilters}></MovieSection>
            <MovieSection title='Lo que se viene' movies={upcomingMovies} filters={[]}></MovieSection>
        </Box>
    )
}

export default App
