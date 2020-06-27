import React from 'react';
import { User } from '../User/User';
import './Todo.css';
import { TodoShape } from './TodoShape';

export function Todo({ todo }) {
  const { user, id, title, completed } = todo;

  return (
    <li
      className={
        (completed)
          ? 'task--done'
          : 'task--not-done'
      }
    >
      <strong>{`${id} ${title}`}</strong>

      <br />
      {`is ${
        (completed)
          ? 'Done'
          : 'Not done'
      } by `}
      <User user={user} />
    </li>
  );
}

Todo.propTypes = TodoShape;
