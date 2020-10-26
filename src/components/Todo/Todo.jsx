import React from 'react';
import { TodoShape } from '../../shapes/TodoShapes';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, user, completed }) => (
  <>
    <li className="todoList__title todoList__item">
      {title}
    </li>
    <li className="todoList__user todoList__item">
      <User {...user} />
    </li>
    <li className="todoList__completed">
      {completed
        ? <p className="todoList__completed__true">completed</p>
        : <p className="todoList__completed__false">Not completed</p>
      }
    </li>
  </>
);

Todo.propTypes = TodoShape;
