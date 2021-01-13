import React from 'react';
import User from './User';
import './todo.scss';
import { TypeTodoItem } from '../types';

const Todo = ({ title, completed, user }) => (
  <>
    <span className="todo__item">
      <span className="todo__item-title">ToDo: </span>
      {title}
    </span>
    <br />
    <span className="todo__item-title">
      Status:
    </span>
    {completed === false
      ? ' false'
      : ' true'}
    <br />
    <span className="todo__item-title">
      User:
    </span>
    {' '}
    <User {...user} />
    <hr />
  </>
);

Todo.propTypes = TypeTodoItem;

export default Todo;
