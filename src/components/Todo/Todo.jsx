import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { UserType } from '../../types';
import './Todo.scss';

export const Todo = ({ todo }) => (
  <>
    <User user={todo.user} />

    <p className="title">
      {todo.title}
    </p>

    <p className="status">
      {`Task is ${todo.completed ? 'completed.' : 'not completed yet.'}`}
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: UserType.isRequired,
  }).isRequired,
};
