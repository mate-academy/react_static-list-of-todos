import React from 'react';
import './TodoList.scss';

import { Todo } from '../Todo';
import { TodoListShape } from '../shapes/TodoListShape';

export function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
}

TodoList.propTypes = TodoListShape;

TodoList.defaultProps = {
  todos: [],
};
