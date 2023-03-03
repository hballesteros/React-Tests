import { useEffect, useMemo, useState } from 'react'
import { getGifsByCategory } from './services/getGifsByCategory'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  const GifItem = ({ title, url, id }) => {
    return (
      <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    )
  }

  const getGifs = async () => {
    setIsLoading(true)
    const newGifs = await getGifsByCategory('avengers', 10, pageNumber)
    setGifs(prevGifs => [...prevGifs, ...newGifs])
    setIsLoading(false)
  }

  function handleScroll () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPageNumber(prevPageNumber => prevPageNumber + 1)
      console.log(pageNumber)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useMemo(() => {
    getGifs()
  }, [pageNumber])

  return (
    <>
      <h1>Infinite Scroll</h1>

      <div className='card-grid'>
        {
          gifs.map(gif => (
            <GifItem
              key={uuidv4()}
              {...gif}
            />
          ))
        }
      </div>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
    </>
  )
}

export default App
