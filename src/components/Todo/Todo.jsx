import React from 'react';
import { User } from '../User';
import './todo.scss';
import { TodoType } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <div className="box">
    <User username={user} />
    <div className="todo">
      <p className="title is-2">{title}</p>
      <img
        className="state"
        src={completed
          ? 'https://img.icons8.com/officel/60/000000/toggle-on.png'
          : 'https://img.icons8.com/officel/60/000000/toggle-off.png'}
        alt="status"
      />
    </div>
  </div>
);

Todo.propTypes = TodoType.isRequired;
