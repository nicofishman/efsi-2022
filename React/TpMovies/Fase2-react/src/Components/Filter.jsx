import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: 0,
        height: 10,
        fontWeight: 'bold',
        padding: 15,
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


const Filter = ({ filters }) => {
    const [filterActive, setFilterActive] = useState(filters[0]);
    console.log(filterActive);
    return (
        <StyledToggleButtonGroup
            exclusive
            aria-label="movie filter"
            value={filterActive}
            sx={{
                height: 50,
                alignItems: 'center',
            }}
        >
            {filters.map((filter) => {
                return (
                    <ToggleButton
                        key={filter}
                        value={filter}
                        aria-label={filter}
                    >
                        {filter}
                    </ToggleButton>
                )
            })}
        </StyledToggleButtonGroup>
    )
}

export default Filter