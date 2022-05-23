import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState, useEffect } from 'react'
import { castById } from '../FetchFunctions'
import { useParams } from 'react-router-dom';

const Cast = ({ id }) => {
    const [cast, setcast] = useState(undefined)
    const { url } = useParams()
    useEffect(() => {
        const fetchcast = async () => {
            const cast = await castById(id, url)
            setcast(cast.cast)
        }
        fetchcast();
    }, [])
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '13rem',
            mx: '2rem',
        }}>
            {cast && cast.slice(0, 3).map((cast, index) => {
                return (
                    <Box key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>
                            {cast.original_name}
                        </Typography>
                        <Typography>
                            {cast.character}
                        </Typography>
                    </Box>
                )
            })}
        </Box>
    )
}

export default Cast