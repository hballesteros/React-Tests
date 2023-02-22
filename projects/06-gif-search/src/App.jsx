import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

function App () {
  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Search</h1>

      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />

      {
      categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))
      }

    </>
  )
}

export default App
