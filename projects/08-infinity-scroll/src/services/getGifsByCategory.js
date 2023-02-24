const API_KEY = 'CtLxflg8GUEXgVz9bHoitaZjFH4jE2a4'

export const getGifsByCategory = async (category, gifsPerPage, page) => {
  if (category === '') return null

  const offset = gifsPerPage * (page - 1)

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${gifsPerPage}&offset=${offset}`)
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
