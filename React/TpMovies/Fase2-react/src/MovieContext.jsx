import React, { children, createContext, useState } from "react"

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [mostSearchedMoviesTyes, setMostSearchedMoviesTyes] = useState({ name: 'En Streaming', type: 'popular', location: 'movie', filters: [], url: 'movie' })

    const [trendingMoviesFilters, setTrendingMoviesFilters] = useState({ name: 'Hoy', timeWindow: 'day' })


    const [lenguage, setLenguage] = useState('es')



    return (
        <MovieContext.Provider
            value={{
                mostSearchedMoviesTyes,
                setMostSearchedMoviesTyes,
                url: mostSearchedMoviesTyes.url,
                lenguage,
                setLenguage,
                setTrendingMoviesFilters,
                trendingMoviesFilters
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

