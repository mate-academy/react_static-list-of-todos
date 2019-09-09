import React from 'react';
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  const { todos } = props;

  return (
    <div className="container">
      <div className="todo-list row">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;