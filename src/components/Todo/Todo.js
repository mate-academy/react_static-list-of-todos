import React from 'react';
import { User } from '../User';
import './Todo.scss';
import { TodoShape } from '../../shapes/TodoShape';

export const Todo = ({ title, user, completed }) => (
  <div className="
    todo
    d-flex
    justify-content-between
    list-group-item
    list-group-item-action
  "
  >
    <div>
      <p className="todo__title">
        {title}
      </p>
      <i>User:</i>
      <User {...user} />
    </div>
    <div className="todo__status-wrapper">
      {completed
        ? <p className="todo__status todo__status--true">Done</p>
        : <p className="todo__status todo__status--false">Not done yet</p>
      }
    </div>
  </div>
);

Todo.propTypes = TodoShape;
