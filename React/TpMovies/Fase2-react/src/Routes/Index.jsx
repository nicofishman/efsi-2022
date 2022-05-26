import React, { useContext, useEffect, useState } from 'react'
import SearchMovieInput from '../Components/SearchMovieInput.jsx'
import MovieSection from '../Components/MovieSection'
import movies from '../../movies_test.json'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { movieByType, trendingMovies } from '../FetchFunctions'
import { MovieContext } from '../MovieContext.jsx'
import ToggleLenguage from '../Components/ToggleLenguage.jsx'


function App() {
    const mostSearchedFilters = [{ name: 'En Streaming', type: 'popular', location: 'movie', url: 'movie', required: true }, { name: 'En Televisión', type: 'popular', location: 'tv', url: 'tv', required: true }, { name: 'En Alquiler', type: 'movie', location: 'discover', filters: ['&with_watch_monetization_types=rent'], url: 'movie', required: true }, { name: 'En Cines', type: 'now_playing', location: 'movie', url: 'movie', required: true }]

    const topRatedFilters = [{ name: 'Hoy', timeWindow: 'day', url: 'movie', required: true}, { name: 'Esta Semana', timeWindow: 'week', url: 'movie', required: true }]


    const { mostSearchedMoviesTyes, setMostSearchedMoviesTyes, lenguage, setTrendingMoviesFilters, trendingMoviesFilters } = useContext(MovieContext)

    const [mostSearchedMovies, setMostSearchedMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {

            const mostSearched = await movieByType(mostSearchedMoviesTyes.type, mostSearchedMoviesTyes.location, mostSearchedMoviesTyes.filters, lenguage)

            const topRated = await trendingMovies(trendingMoviesFilters.timeWindow, lenguage)
            const upcoming = await movieByType('upcoming', 'movie', undefined, lenguage)
            setMostSearchedMovies(mostSearched.results)
            setTopRatedMovies(topRated.results)
            setUpcomingMovies(upcoming.results)
        }
        fetchMovies()
    }, [mostSearchedMoviesTyes, lenguage, trendingMoviesFilters])

    return (
        <Box sx={{
            overflowX: 'hidden',
            //make "background-color: #FFDEE9; background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);" occupy all page
            backgroundColor: '#FFDEE9',
            backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
            textAlign: 'center',
        }}>
            <ToggleLenguage />
            <Typography sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                my: 2
            }}>Movie Search</Typography>
            <SearchMovieInput />
            <MovieSection title='Lo Más Buscado' movies={mostSearchedMovies} filters={mostSearchedFilters} set={(obj) => setMostSearchedMoviesTyes(obj)}></MovieSection>
            <MovieSection title='Lo Mejorcito' movies={topRatedMovies} filters={topRatedFilters} set={(obj) => setTrendingMoviesFilters(obj)}></MovieSection>
            <MovieSection title='Lo que se viene' movies={upcomingMovies} filters={[{url: 'movie', required: false}]}></MovieSection>
        </Box>
    )
}

export default App
