import React from 'react';
import { User } from '../User';
import './Todo.scss';
import { todoPropType } from '../propTypes/todoProptype';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <h2 className="todo__name">
      {title}
    </h2>
    <p className="todo__completed">
      {
        `Completed - ${completed}`
      }
    </p>
    <User {...user} />
  </div>
);

Todo.propTypes = todoPropType;
