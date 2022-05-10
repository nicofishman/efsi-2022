import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Routes/Index'
import Movie from './Routes/Movie'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import ThemeProvider from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/movie/:movieId' element={<Movie />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
