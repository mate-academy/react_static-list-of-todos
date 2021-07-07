import React from 'react';
import { User } from '../User';
import './Todo.scss';
import { TodoShape } from '../propTypes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <li className="todo">
    <h2 className="todo__name">
      {title}
    </h2>
    <p className="todo__completed">
      {`Completed - ${completed}`}
    </p>
    <User {...user} />
  </li>
);

Todo.propTypes = TodoShape;
