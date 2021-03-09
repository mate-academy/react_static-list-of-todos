import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import UserType from '../../UserType';

export const Todo = ({ todo }) => (
  <>
    <h2>
      {todo.title}
    </h2>
    <p>
      {todo.completed ? 'completely completed' : 'completed, but not all'}
    </p>
    <p>
      <User user={todo.user} />
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape(UserType).isRequired,
  }).isRequired,
};
