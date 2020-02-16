import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './todo.css';

export const Todo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <dl className="list">
      <dt>
        <User user={user} />
      </dt>
      <dd className="todo">
        {title}
      </dd>
      <dd className="todo todo-status">
        {completed ? 'done' : 'to do'}
      </dd>
    </dl>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
