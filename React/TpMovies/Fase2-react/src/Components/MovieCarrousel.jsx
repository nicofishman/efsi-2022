import React from 'react'
import Movie from './Movie'
import Box from '@mui/material/Box'

const MovieCarrousel = ({ movies }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll',
        }}>
            {movies.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie} />
                )
            })}
        </Box>
    )
}

export default MovieCarrousel