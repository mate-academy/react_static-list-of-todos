import React from 'react';
import { TodoType } from '../../types';
import { User } from '../User';
import './Todo.scss';

export const Todo = (
  {
    title,
    completed,
    user,
  },
) => (
  <div className={`card ${completed ? 'done' : ''}`}>
    <h2>
      {title}
    </h2>
    <span className={`todotext ${completed ? 'donetext' : ''}`} />
    <span>
      <User {...user} />
    </span>
  </div>
);

Todo.propTypes = TodoType.isRequired;
