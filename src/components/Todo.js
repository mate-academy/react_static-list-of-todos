import React from 'react';
// import PropTypes from 'prop-types';
import { ShapeTodo } from './Shapes';
import { User } from './User';

export const Todo = ({ todo }) => (
  <tr>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
    <td>{todo.title}</td>
    <User name={todo.user.name} />
  </tr>
);

Todo.propTypes = ShapeTodo;
