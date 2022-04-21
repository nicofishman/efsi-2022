import React, { createContext, useMemo, useState, useContext, useEffect } from 'react'
import cartasEspanol from '../Common/cartas.json'
import cartasIngles from '../Common/cartas_en.json'

const CardContext = createContext(undefined)

const CardProvider = ({ children }) => {
    const [lang, setLang] = useState('es')
    const [cartas, setCartas] = useState(cartasEspanol)
    const [input, setInput] = useState('')

    useEffect(() => {
        setCartas(
            (lang === 'es' ? cartasEspanol : cartasIngles)
                .filter(carta => carta.text.toLowerCase()
                    .includes(input.toLowerCase()))
        )
    }, [lang, input])

    const value = useMemo(() => ({
        lang,
        setLang,
        cartas,
        setCartas,
        input,
        setInput
    }), [lang, cartas, input])

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider

export function useCard() {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error('useCard must be used within a CardProvider')
    }
    return context
}
