import React from 'react';
import './Todo.scss';
import { User } from '../User';
import { TodoType } from '../../types';

export const Todo = ({ user, title, completed }) => (
  <>
    <User name={user.name} />
    <p className="todo-item__title">
      {title}
    </p>
    <p className={`todo-item__completed 
     ${completed ? 'todo-item__completed--true'
      : 'todo-item__completed--false'}`}
    >
      {completed
        ? (
          <>
            <span role="img" aria-label="complited">&#9989;</span>
            {' '}
            complited
          </>
        )
        : (
          <>
            <span role="img" aria-label="not-complited">&#10060;</span>
            {' '}
            not complited
          </>
        )
       }
    </p>
  </>
);

Todo.propTypes = TodoType.isRequired;
