import axios from 'axios';

const ApiKey = import.meta.env.VITE_API_KEY

export const movieByType = async (id, location = 'movie', filters = []) => {
    console.log()
    const response = await fetch(`https://api.themoviedb.org/3/${location}/${id}?api_key=${ApiKey}&language=es-ES${(filters) && filters.map(filter => filter)}`)
    const data = await response.json()
    return data
}

export const movieById = async (id) => {
    console.log()
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=es-ES`)
    const data = await response.json()
    return data
}

export const castById = async (id, location) => {
    const response = await axios.get(`https://api.themoviedb.org/3/${location}/${id}/credits?api_key=${ApiKey}&language=es-ES`)
    return response.data
}