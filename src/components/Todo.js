import React from 'react';
import { User } from './User';

import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <div className="App__listItem">
    <div className="App__container">
      <User {...user} />

      <div className="App__task">
        <span className="App__title">Task: </span>
        {title}
      </div>
    </div>

    <div className="App__status">
      <span className="App__title">Status: </span>
      {
        completed
          ? <span className="App__done">Done</span>
          : <span className="App__not-done">Not done yet</span>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape.isRequired;
