import React from 'react';
import { TodoShape } from '../shapes/TodoShape';
import { User } from '../User';

export const Todo = ({ title, user, completed }) => (

  <li className="app__task list-group-item">
    <User {...user} />

    <div className="app__title blockquote">
      Task:
      {title}
    </div>

    <div className={completed
      ? 'app__completed'
      : 'app__not-completed'}
    >
      Status:
      <strong>
        {completed ? 'completed' : 'not completed'}
      </strong>
    </div>
  </li>
);

Todo.propTypes = TodoShape;
