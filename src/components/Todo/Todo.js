import React from 'react';
import { User } from '../User';
import './Todo.scss';
import { TodoShape } from '../../shapes/TodoShape';

export const Todo = ({ todo }) => (
  <>
    <td className="todo__cell">{todo.title}</td>
    <td className="todo__cell">{todo.completed ? 'Yes' : 'No'}</td>
    <td className="todo__cell"><User name={todo.user.name} /></td>
  </>
);

Todo.propTypes = TodoShape;
