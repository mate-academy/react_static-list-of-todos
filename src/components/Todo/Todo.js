import React from 'react';
import './Todo.css';
import classNames from 'classnames';
import User from '../User/User';
import TypeTodo from '../../types';

function Todo({ title, completed, user: { name } }) {
  return (
    <li className="Todo">
      <User name={name} />
      <br />
      <span className="task">{title}</span>
      {' - '}

      <span className={
        classNames(
          'status',
          { completed },
          { inprogress: !completed },
        )
      }
      >
        {completed ? 'completed' : 'not complited'}
      </span>
      <hr />
    </li>
  );
}

Todo.propTypes = TypeTodo.isRequired;

export default Todo;
