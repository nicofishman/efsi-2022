import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: 0,
        height: 10,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: '#fff',
        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#032541',
            color: '#3fd7ad'
        },
        //not selected
        '&:not(.Mui-selected)': {
            color: '#032541'
        },
        '&.Mui-disabled': {
            border: 0,
        },
        '&:first-of-type': {
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50
        },
        '&:last-of-type': {
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50
        },
    },
}));

const ToggleLenguage = () => {

    const { setLenguage, lenguage } = useContext(MovieContext)

    const handleClick = (leng) => {
        setLenguage(leng)
    }

    return (
        <>
            <StyledToggleButtonGroup
                exclusive
                aria-label="movie filter"
                value={lenguage}
                sx={{
                    height: 50,
                    alignItems: 'center',
                }}
            >

                <ToggleButton
                    key="EN"
                    aria-label="EN"
                    value="en"
                    onClick={() => handleClick('en')}
                >
                    EN
                </ToggleButton>
                <ToggleButton
                    key="ES"
                    value="es"
                    aria-label="ES"
                    onClick={() => handleClick('es')}
                >
                    ES
                </ToggleButton>
                <ToggleButton
                    key="HE"
                    value="he"
                    aria-label="HE"
                    onClick={() => handleClick('he')}
                >
                    HE
                </ToggleButton>
            </StyledToggleButtonGroup>
        </>
    )
}

export default ToggleLenguage