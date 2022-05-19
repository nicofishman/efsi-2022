import React, { useEffect, useState } from 'react'
import SearchMovieInput from '../Components/SearchMovieInput.jsx'
import MovieSection from '../Components/MovieSection'
import movies from '../../movies_test.json'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { movieByType } from '../FetchFunctions'


function App() {
    const mostSearchedFilters = [{name: 'En Streaming', type: 'popular', location: 'movie'}, {name: 'En Televisión', type: 'popular', location: 'tv' },{name: 'En Alquiler', type: 'movie', location: 'discover', filters: ['&with_watch_monetization_types=rent'] }, {name: 'En Cines', type: 'now_playing', location: 'movie'}]
    const topRatedFilters = [{name: 'Hoy'}, {name: 'Esta Semana'}]


    const [mostSearchedMoviesTyes, setMostSearchedMoviesTyes] = useState({name: 'En Streaming', type: 'popular', location: 'movie', filters: []})

    const [mostSearchedMovies, setMostSearchedMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            
            const mostSearched = await movieByType(mostSearchedMoviesTyes.type, mostSearchedMoviesTyes.location, mostSearchedMoviesTyes.filters)

            const topRated = await movieByType('top_rated')
            const upcoming = await movieByType('upcoming')
            console.log(mostSearched.results)
            setMostSearchedMovies(mostSearched.results)
            setTopRatedMovies(topRated.results)
            setUpcomingMovies(upcoming.results)
        }
        fetchMovies()
    }, [mostSearchedMoviesTyes])

    return (
        <Box sx={{
            overflowX: 'hidden',
            //make "background-color: #FFDEE9; background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);" occupy all page
            backgroundColor: '#FFDEE9',
            backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
            textAlign: 'center',
        }}>
            <Typography sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                my: 2
            }}>Movie Search</Typography>
            <SearchMovieInput />
            <MovieSection title='Lo Más Buscado' movies={mostSearchedMovies} filters={mostSearchedFilters} set={(obj) => setMostSearchedMoviesTyes(obj)}></MovieSection>
            <MovieSection title='Lo Mejorcito' movies={topRatedMovies} filters={topRatedFilters}></MovieSection>
            <MovieSection title='Lo que se viene' movies={upcomingMovies} filters={null}></MovieSection>
        </Box>
    )
}

export default App
