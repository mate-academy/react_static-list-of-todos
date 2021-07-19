import React from 'react';
import classNames from 'classnames';

import { TodoType } from '../../types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="card">
    <h3 className="card__title" title="Task title">
      {title}
    </h3>
    <p className="card__user" title="Task author">
      <User user={user} />
    </p>
    <div
      title="Task status"
      className={
        classNames('card__status', {
          completed,
          uncompleted: !completed,
        })
      }
    >
      {completed ? 'Done' : 'Unfinished'}
    </div>
  </div>
);

Todo.propTypes = {TodoType}
