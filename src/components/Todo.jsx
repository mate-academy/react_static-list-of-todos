import React from 'react';
import { User } from './User';
import './Todo.css';
import { TodoShape } from './Shape';

export const Todo = ({ id, title, completed, user, username }) => (
  <li className="item">
    <span>
      {id}
      .
    </span>
    <span><User {...user} /></span>
    <span>{user.username}</span>
    <span>{title}</span>
    <span>{completed ? 'complited' : 'not complited'}</span>
  </li>
);

Todo.propTypes = TodoShape.isRequired;
