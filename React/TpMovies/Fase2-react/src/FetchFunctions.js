import axios from 'axios';

const ApiKey = import.meta.env.VITE_API_KEY

export const movieById = async (id, location = 'movie', filters = []) => {
    console.log(`https://api.themoviedb.org/3/${location}/${id}?api_key=${ApiKey}&language=es-ES${(filters) && filters.map(filter => filter)}`)
    const response = await axios.get(`https://api.themoviedb.org/3/${location}/${id}?api_key=${ApiKey}&language=es-ES${(filters) && filters.map(filter => filter)}`)
    return response.data
}

export const castById = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=es-ES`)
    return response.data
}