import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export function Todo({ todo }) {
  return (
    <>
      <p className="todo__title">{todo.title}</p>
      <User user={todo.user} />
      <p className="todo__status">{todo.completed ? 'OK' : '-'}</p>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
