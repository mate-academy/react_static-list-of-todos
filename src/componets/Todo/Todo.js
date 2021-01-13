import React from 'react';
import './Todo.scss';
import { User } from '../User/User';
import { typeTodo } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <div className="card">
    <User {...user} />
    <br />
    task:
    {' '}
    {title}
    <br />
    status:
    {' '}
    {completed
      ? <span className="card__status--ok">finished</span>
      : <span className="card__status">unfinished</span>}
    <br />
  </div>
);

Todo.propTypes = typeTodo;
