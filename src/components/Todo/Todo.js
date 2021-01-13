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
  <div className={`card ${completed ? 'done' : 'todo'}`}>
    <h2>
      {title}
    </h2>
    <span>
      <i>{completed ? 'done by' : 'todo for'}</i>
    </span>
    <span>
      <User {...user} />
    </span>
  </div>
);

Todo.propTypes = TodoType.isRequired;
