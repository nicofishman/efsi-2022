import React from 'react'

const MovieSection = ({ title, movies }) => {
    return (
        <>
            <div className="sectionTitle">
                {title}
            </div>
            <MovieCarrousel movies={movies}></MovieCarrousel>
        </>
    )
}

export default MovieSection