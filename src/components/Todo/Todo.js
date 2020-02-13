import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export function Todo({ todo: { title, user, completed } }) {
  return (
    <>
      <p className="todo__title">{title}</p>
      <User user={user} />
      <p className="todo__status">{completed ? 'OK' : '-'}</p>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
