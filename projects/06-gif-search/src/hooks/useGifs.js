import { useEffect, useState } from 'react'
import { searchGifs } from '../services/gifs'

export const useGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGifs = async () => {
    const newGifs = await searchGifs(category)
    setGifs(newGifs)
    setIsLoading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}
