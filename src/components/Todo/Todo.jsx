import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({
  title,
  user,
  completed,
}) => (
  <>
    <h2>{title}</h2>
    <User name={user} />
    <p>
      Task is
      {completed || ' not '}
      completed.
    </p>
    {completed ? (
      <i className="todo-list__item-completed" />
    ) : ''
    }
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
