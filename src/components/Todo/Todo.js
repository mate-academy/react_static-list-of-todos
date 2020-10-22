import React from 'react';
import './Todo.scss';

import { TodoShape } from '../shapes/TodoShape';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <h2 className="todo__title">{title}</h2>
    <User {...user} />
    <div className="todo__status">
      {completed
        ? <p className="todo__status todo__status--done">Completed</p>
        : <p className="todo__status todo__status--not-done">In process</p>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape;
