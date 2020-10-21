import React from 'react';
import { User } from './User';
import { TodoShape } from '../shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <div className="App__list-item">
    <div>
      <span className="App__title">Task:&nbsp;</span>
      {title}
    </div>

    <User {...user} />

    <div className="App__status">
      <span className="App__title">Status:</span>
      {
        completed
          ? <span className="App__completed"> completed</span>
          : <span className="App__uncompleted"> in process</span>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape;
