import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

const RatingWheel = ({ rating }) => {
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
                    color: '#3fd7ad',
                    fontWeight: 'bold',
                }}>{rating}</Typography>
            </Box>
            <CircularProgress variant='determinate' color='success' value={rating} sx={{
                padding: 0.4,
                position: 'relative',
                top: -40,
            }} />

        </Box>
    )
}

export default RatingWheel