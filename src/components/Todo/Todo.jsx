import React from 'react';
import classNames from 'classnames';

import { User } from '../User';

import './todo.scss';

export const Todo = ({title, completed, user}) => (
  <>
    <User user={user} />
    <p className="todo__title">
      {title}
    </p>
    <p className={classNames('todo__status', {'todo__status--completed': completed})} >
      {completed ? 'Completed' : 'Do it!!!'}
    </p>
  </>
);
