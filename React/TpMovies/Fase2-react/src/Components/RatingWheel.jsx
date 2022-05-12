import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

const RatingWheel = ({ rating }) => {
    const wheelColor = rating >= 7 ? 'success' : rating >= 4 ? 'warning' : 'error'
    return (
        <Box position='relative' sx={{
            top: '-12%',
            left: '5%',
        }}>
            <Box sx={{
                width: 40,
                height: 40,
                backgroundColor: '#081c22',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                borderRadius: '50%',
            }}>
                <Typography sx={{
                    mt: 0.1,
                    fontSize: '0.8rem',
                    color: 'white',
                    fontWeight: 'bold',
                }}>{rating}</Typography>
            </Box>
            <CircularProgress variant='determinate' color={wheelColor} value={rating * 10} sx={{
                padding: 0.4,
                position: 'relative',
                top: -40,
                left: -80
            }} />

        </Box>
    )
}

export default RatingWheel