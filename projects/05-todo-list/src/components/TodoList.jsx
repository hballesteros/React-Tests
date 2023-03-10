import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={id => onRemoveTodo(id)}
          onToggleTodo={id => onToggleTodo(id)}
        />
      ))}
    </ul>
  )
}
