import React from 'react';
import { TodoShape } from './TodoShape';

function Todo({ todo }) {
  return (
    <li className="list__item">
      <input type="checkbox" checked={todo.completed} />
      <span className="list__item-title">{ todo.title }</span>
      <span className="list__item-user">{ todo.user }</span>
    </li>
  );
}

Todo.propTypes = TodoShape.isRequired;

export default Todo;
