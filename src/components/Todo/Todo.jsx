import React from 'react';
import { User } from '../User';
import { TodoShape } from '../shapes/TodoShape';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <li className="todo-list__todo todo">
    <input
      type="checkbox"
      readOnly
      checked={completed}
    />

    <div>{title}</div>

    <User {...user} />
  </li>
);

Todo.propTypes = TodoShape;
