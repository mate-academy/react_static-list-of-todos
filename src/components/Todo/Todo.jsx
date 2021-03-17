import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import { TodoType } from '../../types';

export const Todo = ({ todo }) => (
  <>
    <h1>
      {todo.title}
    </h1>
    <span>
      {todo.completed === true ? '✔️' : '❌'}
    </span>
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape(TodoType),

};

Todo.defaultProps = {
  todo: null,
};
