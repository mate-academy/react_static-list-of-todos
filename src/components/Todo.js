import React from 'react';
import { TodoShape } from '../shapes/TodoShape';
import { User } from './User';

export const Todo = ({ title, user, completed }) => (
  <div className="App__listItem">
    <div className="App__container">
      <User {...user} />

      <div className="App__taskName">
        <span className="App__title">Task:</span>

        {' '}

        {title}
      </div>
    </div>

    <div className="App__status">
      <span className="App__title">Status: </span>

      {' '}

      {
        completed
          ? <span className="App__success">Done</span>
          : <span className="App__failed">Not done yet</span>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape.isRequired;
