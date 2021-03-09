import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { UserTypes, TodoTypes } from '../../types';

export const Todo = ({ todo }) => (
  <>
    <h1>
      {todo.title}
    </h1>
    <span>
      {todo.completed === true ? 'true' : 'false'}
    </span>
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    TodoTypes,
    user: PropTypes.shape({ UserTypes }),
  }),

};

Todo.defaultProps = {
  todo: null,
};
