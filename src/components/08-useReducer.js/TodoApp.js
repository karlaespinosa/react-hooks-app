import React, { useReducer, useState, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import './TodoApp.css';
import TodoList from './TodoList';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  }

  const handleDelete = id => {
    const action = {
      type:'delete',
      payload: id
    }

    dispatch(action);
  }

  const handleToggle = id => {
    dispatch({
      type: 'toggle',
      payload: id
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    const newTodo = {
      id: new Date().getTime(),
      todo: todo.trim(),
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    setTodo('');
  };

  return (
    <div>
      <h1>TodoApp: {todos?.length}</h1>
      <hr />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
      <div>
        <h1>Agregar</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Aprender...'
            autoComplete='off'
            value={todo}
            onChange={handleInputChange}
          />
          <button type='submit' className='btn btn-outline-primary'>Agregar</button>
        </form>
      </div>
    </div>
  )
}

export default TodoApp
