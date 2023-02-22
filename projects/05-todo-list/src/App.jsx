import { AddTodo, TodoList } from './components'
import { useTodos } from './hooks/useTodos'

function App () {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos()

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <TodoList
            todos={todos}
            onRemoveTodo={id => handleRemoveTodo(id)}
            onToggleTodo={id => handleToggleTodo(id)}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo
            onNewTodo={event => handleNewTodo(event)}
          />
        </div>

      </div>
    </>
  )
}

export default App
