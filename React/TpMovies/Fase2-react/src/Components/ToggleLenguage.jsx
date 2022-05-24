import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext';
import Flag from 'react-world-flags';

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
    const languageFilters = [
        {
            value: 'en',
            label: 'English',
            flag: 'us'
        },
        {
            value: 'es',
            label: 'Español',
            flag: 'es'
        },
        {
            value: 'pt',
            label: 'Português',
            flag: 'pt'
        },
        {
            value: 'fr',
            label: 'Français',
            flag: 'fr'
        },
        {
            value: 'it',
            label: 'Italiano',
            flag: 'it'
        },
        {
            value: 'he',
            label: 'עברית',
            flag: 'il'
        },
        {
            value: 'de',
            label: 'Deutsch',
            flag: 'de'
        },
        {
            value: 'ru',
            label: 'Русский',
            flag: 'ru'
        },
        {
            value: 'ja',
            label: '日本語',
            flag: 'jp'
        },
        {
            value: 'ko',
            label: '한국어',
            flag: 'kr'
        },
        {
            value: 'zh',
            label: '中文',
            flag: 'cn'
        },
        {
            value: 'ar',
            label: 'العربية',
            flag: 'sa'
        },
    ]

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
                {languageFilters.map(filter => (
                    <ToggleButton
                        key={filter.value}
                        value={filter.value}
                        aria-label={filter.label}
                        onClick={() => handleClick(filter.value)}
                    >
                        <Flag code={filter.flag} fallback={<span>Unknown</span>} height="16" />
                    </ToggleButton>
                ))}
            </StyledToggleButtonGroup>
        </>
    )
}

export default ToggleLenguage