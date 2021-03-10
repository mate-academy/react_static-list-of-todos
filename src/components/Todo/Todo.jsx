import React from 'react';
import './Todo.scss';

import { TodoType } from '../../types';
import { User } from '../User';

export function Todo(props) {
  const { title, completed, user } = props.todo;

  return (
    <li className="app__item">
      <h2>{title}</h2>
      <p>{completed.toString()}</p>
      <User user={user} />
    </li>
  );
}

Todo.propTypes = {
  todo: TodoType.isRequired,
};
