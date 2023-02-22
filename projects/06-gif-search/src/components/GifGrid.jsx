import { GifItem } from './GifItem'
import { useGifs } from '../hooks/useGifs'

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className='card-grid'>
        {
            gifs.map((gif) => (
              <GifItem
                key={gif.id}
                {...gif}
              />
            ))
        }
      </div>
    </>
  )
}
