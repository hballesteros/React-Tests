import { useState } from 'react'

export const AddTodo = ({ onNewTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: new Date().getTime(),
    description: '',
    done: false
  })

  const onInputChange = (event) => {
    setInputValue({
      id: new Date().getTime(),
      description: event.target.value,
      done: false
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.description.length <= 1) return
    onNewTodo(inputValue)
    setInputValue({
      id: new Date().getTime(),
      description: '',
      done: false
    })
  }

  return (

    <form onSubmit={onSubmit}>

      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        value={inputValue.description}
        onChange={onInputChange}
      />

      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Agregar
      </button>

    </form>
  )
}
