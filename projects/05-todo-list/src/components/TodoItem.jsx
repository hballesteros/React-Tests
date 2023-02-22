
export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${todo.done ? 'list-group-item-danger' : 'list-group-item-succes'}`}>
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''} `}
        onDoubleClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className='btn btn-outline-secondary'
        onClick={() => onRemoveTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
