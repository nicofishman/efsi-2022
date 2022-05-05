import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';


const SearchMovieInput = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <TextField
                InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon sx={{ fontSize: '2rem', color: '#032541' }} /></InputAdornment>
                }}

                placeholder='Buscar Película...'
                sx={{
                    width: '40%',
                    minWidth: '300px',
                    [`& fieldset`]: {
                        borderRadius: 50,
                        borderColor: '#032541',
                        borderWidth: '2px',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#3fd7ad',
                            borderWidth: '2px',
                        },
                        '&.Mui-focused svg': {
                            color: '#3fd7ad',
                        }
                    }
                }} />
        </Box>
    )
}

export default SearchMovieInput