import React from 'react'
import Movie from './Movie'
import Box from '@mui/material/Box'

const MovieCarrousel = ({ movies, filters }) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll',
            "&::-webkit-scrollbar": {
                height: 10,
            },
            "&::-webkit-scrollbar-track": {
                background: "transparent"
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#3fd7ad",
                borderRadius: 50,
            }
        }}>
            {movies.map((movie) => {
                console.log(movie);
                return (
                    <Movie key={movie.id} filters={filters} movie={movie} />
                )
            })}
        </Box>
    )
}

export default MovieCarrousel