import React from 'react';
import './Todo.css';
import { User } from './User';
import { ShapeTodo } from '../Shapes/ShapeTodo';

export const Todo = ({ todoItem }) => (
  <li>
    <div className={`todo todo--${todoItem.completed}`}>
      <input type="checkbox" checked={todoItem.completed} />
      <span>{todoItem.title}</span>
      <User user={todoItem.user} />
    </div>
  </li>
);

Todo.propTypes = ShapeTodo.isRequired;
