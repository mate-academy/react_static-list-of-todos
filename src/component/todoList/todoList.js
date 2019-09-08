import './todoList.css'
import React from 'react';
import TodoItem from '../todoItem/todoItem';

function TodoList(props) {
  return (
    <div className="container">
      {props.todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList;
