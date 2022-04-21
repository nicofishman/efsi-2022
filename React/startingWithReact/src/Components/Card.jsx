import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Mono from '../Common/Mono.png'

export default function Card({ carta }) {
    return (
        <Box
            key={carta.id}
            sx={{
                position: 'relative',
                width: '10.3em',
                height: '15.6em',
                border: '1px solid #666',
                borderRadius: '0.3em',
                padding: 1,
                mr: 0.5,
                mb: 0.5,
                textAlign: 'center',
                overflowWrap: 'break-word',
                bgcolor: carta.color === 'White' ? 'white' : 'black',
                color: carta.color === 'White' ? 'black' : 'white',
                boxShadow: '0.2em 0.2em 0.5em #666',
                transitionDuration: '0.5s',
                userSelect: 'none',
                '&:hover': {
                    transform: carta.color === 'White' && 'translateY(-0.8em)',
                    cursor: carta.color === 'White' && 'grab'
                },
            }}
        >
            <Typography
                align={'left'}
                sx={{
                    p: 0.8,
                    userSelect: 'none',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif;',
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    color: carta.color === 'White' ? 'black' : 'white',
                }}
            >
                {carta.text}
            </Typography>
            <Box
                component='img'
                src={Mono}
                alt='Logo'
                sx={{
                    position: 'absolute',
                    width: '4em',
                    right: '0.4em',
                    bottom: 0,
                    userSelect: 'none'
                }}
            >
            </Box>
        </Box>
    )
}
