import React from 'react';
import { User } from '../User';
import { TodoShape } from '../shapes/TodoShape';

import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <li className="list__item">
    <User name={user.name} />
    <div className="list__title">{title}</div>
    <div className={completed
      ? 'list__item--completed'
      : 'list__item--not-completed'
    }
    >
      {
        completed ? 'Completed' : 'In process'
      }
    </div>
  </li>
);

Todo.propTypes = TodoShape;
