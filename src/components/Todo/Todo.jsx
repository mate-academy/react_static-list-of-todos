import React from 'react';
import PropTypes from 'prop-types';
import './todo.scss';
import { User } from '../User';

export function Todo({ title, completed, user }) {
  return (
    <div className="todo">
      <User {...user} />
      {title}
      :
      {completed ? 'completed' : 'not completed'}
    </div>
  );
}

export const todoType = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

Todo.propTypes = todoType;
