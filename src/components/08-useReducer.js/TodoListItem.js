import React from 'react'

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className='item list-group-item'>
      <p
        onClick={() => handleToggle(todo.id)}
        className={todo.done ? 'toggle' : ''}
      >
        {index + 1}. {todo.todo}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}

export default TodoListItem
