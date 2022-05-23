import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { movieById, movieByType } from '../FetchFunctions'
import RatingWheel from './../Components/RatingWheel';
import MovieInfo from './../Components/MovieInfo';
import { MovieContext } from '../MovieContext'


const Movie = () => {


    const { movieId, url } = useParams()
    const [movie, setMovie] = useState(undefined)
    useEffect(() => {
        const fetchMovie = async () => {
            const movie = await movieByType(movieId, url)
            setMovie(movie)
        }
        fetchMovie();
    }, [])
    return (
        movie &&
        <>
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    // background: `linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84))`,
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    filter: 'brightness(0.2)',
                    zIndex: -1,
                }}
            />
            <Box
                component='img'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                sx={{
                    width: '20rem',
                    top: '2rem',
                    left: '3rem',
                    position: 'relative',
                    borderRadius: 10,
                }}
            />
            <MovieInfo movie={movie} />
        </>
    )
}

export default Movie