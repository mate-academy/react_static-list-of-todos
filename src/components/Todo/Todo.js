import React from 'react';
import { User } from '../User';
import './Todo.scss';
import { TodoShape } from '../../shapes/TodoShape';

export const Todo = ({ title, completed, user }) => (
  <li className="todo">
    <User {...user} />
    <div className="todo__container">
      <div>
        Task:
        {title}
      </div>
      {completed
        ? <div className="todo__completed todo__completed--yes">Completed</div>
        : <div className="todo__completed todo__completed--no">In process</div>}
    </div>
  </li>
);

Todo.propTypes = TodoShape;
