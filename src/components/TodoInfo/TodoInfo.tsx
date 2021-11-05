import React from 'react';
import classNames from 'classnames';

import { PreparedTodoType } from '../../Types/PreparedTodosType';

import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodoType> = ({ title, completed }) => (
  <h2 className={classNames('title', { title__completed: completed })}>
    {title}
  </h2>
);
