import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Movie = ({ movie }) => {
    const { poster_path, vote_average } = movie
    const title = movie.title || movie.name
    const release_date = movie.release_date || movie.first_air_date
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 5
        }}>
            <Box sx={{
                width: '300px',
                height: '450px',
            }}>
                <Box
                    component='img'
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    sx={{
                        borderRadius: '10px',
                    }}
                />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
            }}>
                <Typography>{title}</Typography>
                <Typography>{release_date}</Typography>
            </Box>
        </Box>
    )
}

export default Movie