import React from 'react';
import './Todo.scss';

import { User } from '../User';
import { todoType } from '../../propTypes/todoType';

export const Todo = ({ title, completed, user }) => (
  <div className="todo__item">
    <div>{title}</div>
    <div>{completed ? 'completed' : 'incomplete'}</div>
    <User name={user.name} />
  </div>
);

Todo.propTypes = todoType.isRequired;
