import React from 'react';
import { User } from './User';
import { TodoShape } from './Shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <li className="list__item">
    <User {...user} />
    <div className="list__title">{title}</div>
    <div className="list__completed">
      {
        completed === false
          ? 'Not completed'
          : 'Completed'
      }
    </div>
  </li>
);

Todo.propTypes = TodoShape;
