import React, { Fragment } from 'react'
import './App.css'
import Box from '@mui/material/Box'
import Card from './Components/Card'
import Input from '@mui/material/Input'
import MySwitch from './Components/MySwitch/MySwitch'
import { useCard } from './Context/CardContext'

const App = () => {
    const { cartas, input, setInput } = useCard()
    const handleChange = e => setInput(e.target.value)

    return (
        <Fragment>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 5
            }}>
                <MySwitch></MySwitch>
                <Input value={input} onChange={handleChange}></Input>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridGap: '1rem',
                    justifyContent: 'center',
                    mt: 5,
                    justifyItems: 'center',
                }}
            >
                {cartas.map((carta) => {
                    return (
                        <Card carta={carta} key={carta.id}/>
                    )
                })}
            </Box>
        </Fragment>
    )
}

export default App
