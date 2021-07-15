import React from 'react';
import './Todo.scss';
import User from '../User/User';
import { TodoListProps } from '../../Props';

const Todo = ({ title, completed, person }) => (
  <li className="todo-item">
    <h3 className="todo-item__head">{normalaizeHead(title)}</h3>
    <p className="todo-item__status">
      {completed ? 'completed' : 'not completed yet'}
    </p>
    <User {...person} />
  </li>
);

const normalaizeHead = (str) => {
  const result = str.toUpperCase();

  return result[0] + str.slice(1);
};

Todo.propTypes = { ...TodoListProps };

export default Todo;
