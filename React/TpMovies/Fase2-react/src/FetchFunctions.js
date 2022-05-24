import axios from 'axios';

const ApiKey = import.meta.env.VITE_API_KEY


export const movieByType = async (id, location = 'movie', filters = [], lenguage = 'es') => {
    console.log()
    const response = await fetch(`https://api.themoviedb.org/3/${location}/${id}?api_key=${ApiKey}&language=${lenguage}${(filters) && filters.map(filter => filter)}`)
    const data = await response.json()
    return data
}

export const movieById = async (id, lenguage = 'es') => {
    console.log()
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=${lenguage}`)
    const data = await response.json()
    return data
}

export const castById = async (id, location, lenguage = 'es') => {
    const response = await axios.get(`https://api.themoviedb.org/3/${location}/${id}/credits?api_key=${ApiKey}&language=${lenguage}`)
    return response.data
}