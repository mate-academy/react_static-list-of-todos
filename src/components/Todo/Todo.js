import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export function Todo(props) {
  const { todo } = props;

  return (
    <li
      key={todo.id}
      className={
        (todo.completed)
          ? 'task--done'
          : 'task--not-done'
      }
    >
      <strong>{`${todo.id} ${todo.title}`}</strong>
      <br />
      {`is ${
        (todo.completed)
          ? 'Done'
          : 'Not done'
      } by `}
      <User user={todo.user} />
    </li>
  );
}

Todo.propTypes = PropTypes.shape({
  user: PropTypes.shape({
    name: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;
