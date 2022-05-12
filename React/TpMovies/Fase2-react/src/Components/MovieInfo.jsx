import React from 'react'
import RatingWheel from './../Components/RatingWheel';
import Cast from './../Components/Cast';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const MovieInfo = ({ movie }) => {
    return (
        <Box
            sx={{
                color: 'white',
                position: 'absolute',
                width: '70%',
                top: '2rem',
                left: '25rem',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <Typography sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                }}>
                    {movie.original_title || movie.name} ({(movie.release_date || movie.first_air_date).split('-')[0]})
                </Typography>
                <Box sx={{
                    display: 'flex',
                    width: '5rem',
                }}>
                    <RatingWheel rating={movie.vote_average} />
                </Box>
            </Box>
            <Typography sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
            }}>
                Vista General
            </Typography>
            <Typography sx={{
                fontSize: '1.2rem',
            }}>
                {movie.overview}
            </Typography>
            <Cast id={movie.id} />
        </Box>
    )
}

export default MovieInfo