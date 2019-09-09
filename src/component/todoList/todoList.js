import './TodoList.css';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos: copyTodos }) {
  return (
    <div className="container">
      { copyTodos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      )) }
    </div>
  );
}

export default TodoList;
