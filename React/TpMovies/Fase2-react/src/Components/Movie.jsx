import React, { useContext, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RatingWheel from './RatingWheel';
import { Link } from 'react-router-dom';
import { MovieContext } from '../MovieContext';



const Movie = ({ movie, filters }) => {

    const [urlLocation, setUrlLocation] = useState()

    const {mostSearchedMoviesTyes, trendingMoviesFilters} = useContext(MovieContext)

    useEffect(() => {

        switch (filters.length) {
            case 1:
                setUrlLocation(filters[0].url)
                break;
            
            case 2:
                setUrlLocation(trendingMoviesFilters.url)
                break;

            case 4:
                setUrlLocation(mostSearchedMoviesTyes.url)
                
                break;
        
            default:
                break;
        }


    }, [filters, mostSearchedMoviesTyes, trendingMoviesFilters])
    

    const { poster_path, vote_average, id } = movie
    const title = movie.title || movie.name
    const release_date = movie.release_date || movie.first_air_date
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 5,
            my: 2,
            width: 200,
        }}>
            <Link to={`/${urlLocation}/${id}`} style={{
                textDecoration: 'none',
            }}>
                <Box
                    sx={{
                        width: 200,
                        height: 300,
                        mb: 4,
                        transitionDuration: '0.3s',
                        "&:hover": {
                            cursor: 'pointer',
                            transform: 'scale(1.05)',
                        }
                    }}>
                    <Box
                        component='img'
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        sx={{
                            borderRadius: '10px',
                            mb: 2,
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <RatingWheel rating={vote_average} />
                </Box>
            </Link>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                overflow: 'hidden',
            }}>
                <Typography fontWeight='bold' sx={{
                    whiteSpace: 'nowrap',
                    transitionDuration: '3s',
                    zIndex: 10,
                    "&:hover": {
                        transform: title.length > 30 && 'translateX(-80%)',
                        overflow: title.length > 30 && 'visible',
                    }
                }}>{title}</Typography>
                <Typography fontWeight={100}>{release_date}</Typography>
            </Box>
        </Box>
    )
}

export default Movie