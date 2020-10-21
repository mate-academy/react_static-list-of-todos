import React from 'react';
import { TodoShape } from '../../shapes/TodoShapes';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, user, completed }) => (
  <div className="todoList">
    <p className="todoList__title">
      {title}
    </p>
    <p>
      User:
      <span className="todoList__user">
        <User {...user} />
      </span>
    </p>
    <div className="completed">
      {completed
        ? <p className="completed__true">Done</p>
        : <p className="completed__false">Not done</p>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape;
