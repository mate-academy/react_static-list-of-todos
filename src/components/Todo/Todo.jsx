import React from 'react';
import { TodoPropsType } from '../types';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <span className="todo__title">
      Todo:
      {title}
    </span>
    <span className="todo__status">
      Status:
      {completed ? 'Completed' : 'In progress'}
    </span>
    <span className="todo__user">
      User:
      {user.name}
    </span>
  </div>
);

Todo.propTypes = TodoPropsType;
