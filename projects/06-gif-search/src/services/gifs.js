const API_KEY = 'CtLxflg8GUEXgVz9bHoitaZjFH4jE2a4'

export const searchGifs = async (category) => {
  if (category === '') return null

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`)
    const { data } = await response.json()
    return data?.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }))
  } catch (e) {
    throw new Error('Error searching gifs')
  }
}
