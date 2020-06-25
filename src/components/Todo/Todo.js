import React from 'react';
import './Todo.css';
import { User } from '../User/User';
import { TodoTypes } from '../Shape/TodoTypes';

export const Todo = (props) => {
  const { completed, title, user } = props;

  return (
    <>
      <div className={completed ? 'done' : 'undone'} />
      <p className="task">
        {title}
      </p>
      <User {...user} />
    </>
  );
};

Todo.propTypes = TodoTypes;
