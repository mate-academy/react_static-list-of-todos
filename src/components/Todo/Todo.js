import React from 'react';
import './Todo.scss';
import { TodoShape } from '../shapes/TodoShape';
import { User } from '../User';

export const Todo = ({ user, title, completed }) => (
  <div className="todo">
    <div>
      <div className="todo__title">
        User:
      </div>
      <div className="todo__info">
        <User {...user} />
      </div>
    </div>

    <div>
      <div className="todo__title">
        Task:
      </div>
      <div className="todo__info">
        {title.slice(0, 1).toUpperCase() + title.slice(1)}
      </div>
    </div>

    <div>
      <div className="todo__title">
        Status:
      </div>
      <div className="todo__info">
        <div
          className={
            completed
              ? 'todo__icon'
              : 'todo__icon todo__icon--not-completed'
          }
        />
        <div>
          {completed ? 'Completed' : 'Not completed'}
        </div>
      </div>
    </div>
  </div>
);

Todo.propTypes = TodoShape;
