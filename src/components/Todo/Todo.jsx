import React from 'react';
import { TodoType } from '../propTypes/TodoType';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="Todo__item">
    <User {...user} />
    <div className="wrapper">
      <div className="Todo__item-task">
        {title}
      </div>
    </div>
    <div className="Todo__item-status">
      {completed ? 'Done' : 'Not yet'}
    </div>
  </div>
);

Todo.propTypes = TodoType;
