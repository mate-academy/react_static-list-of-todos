import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ todo }) => (
  <>
    <User user={todo.user} />
    <span className="todo-list__task">{todo.title}</span>
    <span>{todo.completed ? 'done' : 'in progress'}</span>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};
