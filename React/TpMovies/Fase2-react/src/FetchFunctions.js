const ApiKey = import.meta.env.VITE_API_KEY

export const movieById = async (id, location = 'movie', filters = []) => {
    console.log()
    const response = await fetch(`https://api.themoviedb.org/3/${location}/${id}?api_key=${ApiKey}&language=es-ES${(filters) && filters.map( filter => filter )}`)
    const data = await response.json()
    return data
}

export const castById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=es-ES`)
    const data = await response.json()
    return data
}