import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RatingWheel from './RatingWheel';

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
                width: 200,
                height: 300,
                mb: 4
            }}>
                <Box
                    component='img'
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    sx={{
                        borderRadius: '10px',
                        mb: 2,
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
                <RatingWheel rating={vote_average} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
            }}>
                <Typography fontWeight='bold'>{title}</Typography>
                <Typography fontWeight={100}>{release_date}</Typography>
            </Box>
        </Box>
    )
}

export default Movie