import React from 'react';
import { TodoShape } from '../shapes/TodoShape';
import { User } from '../User';

export const Todo = ({ title, user, completed }) => (
  <div className="app__task">
    <div className="app__title">
      {title}
    </div>

    <div className="app__completed">
      {completed ? 'completed' : 'not completed'}
    </div>

    <User {...user} />
  </div>
);

Todo.propTypes = TodoShape;
