import React from 'react';
import { User } from '../User';
import { TodoShape } from '../Shapes/TodoShape';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="TodoList__Todo Todo">
    <h3 className="Todo__title">
      {`Task: ${title}`}
    </h3>

    <div className="Todo__details">
      <User {...user} />

      {completed
        ? <div className="Todo__status Todo__status--completed">Completed</div>
        : <div className="Todo__status">Not completed</div>}
    </div>
  </div>
);

Todo.propTypes = TodoShape;
