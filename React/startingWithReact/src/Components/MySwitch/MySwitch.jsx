import React from 'react'
import { useCard } from '../../Context/CardContext'
import './MySwitch.css'

function MySwitch() {
    const { lang, setLang } = useCard()
    const handleChange = (e) => {
        setLang(e.target.checked ? 'es' : 'en')
    }

    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={lang === 'es'} className="switch-input" onChange={(e) => handleChange(e)} />
                <span className="switch-label" data-on="Español" data-off="Inglés"></span>
                <span className="switch-handle"></span>
            </label>
        </>
    )
}

export default MySwitch
