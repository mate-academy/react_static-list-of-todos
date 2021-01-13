import React from 'react';
import { TodoType } from '../../types';
import './Todo.scss';

export function Todo({ title, user, completed }) {
  return (
    <li className="to-do__item">
      <strong>
        {`Task: ${title}`}
      </strong>
      <br />
      {`Status: ${completed ? 'finished' : 'unfinished'}`}
      <br />
      {`User: ${user}`}
    </li>
  );
}

Todo.propTypes = TodoType;
