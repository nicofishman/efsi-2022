import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CardProvider from './Context/CardContext'

ReactDOM.render(
    <CardProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </CardProvider>,
    document.getElementById('root')
)
