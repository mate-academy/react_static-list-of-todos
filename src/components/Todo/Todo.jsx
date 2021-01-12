import React from 'react';
import classNames from 'classnames';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ ...todoOfUser }) => (
  <>
    <User {...todoOfUser.user} />
    <div className="todo">
      <p className="todo__title">
        {todoOfUser.title}
      </p>
      <p className={classNames('todo__state', {
        'todo__state--done': todoOfUser.completed === true,
      })}
      >
        {todoOfUser.completed === true ? 'Done' : 'Not done'}
      </p>
    </div>
  </>
);
