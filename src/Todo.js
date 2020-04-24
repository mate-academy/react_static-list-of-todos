import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import './Todo.css';

export const Todo = ({ todo }) => (
  <>
    <p>
      <b>Task</b>: {todo.title}
    </p>
    <User userInfo={todo.user} />
    <p>
      <b>Status</b>:
      {
        todo.completed
        ? <span className="status-true">Done</span>
        : <span className="status-false">In process</span>
      }
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
