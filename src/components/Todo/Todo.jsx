import React from 'react';
import { TypeTodo } from '../../types';
import { User } from '../User';

import './Todo.scss';

const Todo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <h3>{title}</h3>
      <span>
        {'Completed: '}
        {completed ? 'yes' : 'no'}
        <br />
        <User user={user} />
      </span>
    </>
  );
};

Todo.propTypes = {
  todo: TypeTodo.isRequired,
};

export { Todo };
