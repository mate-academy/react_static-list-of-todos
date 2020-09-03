import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';
import { User } from '../User';

export const Todo = ({ title, completed, userTodo }) => (
  <>
    <h4 className="todo__title">
      {title}
    </h4>
    <div
      className={
        completed
          ? 'todo__completed todo__completed-done'
          : 'todo__completed todo__completed-notDone'
      }
    />
    <User {...userTodo} />
  </>
);

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  userTodo: PropTypes.objectOf(PropTypes.string).isRequired,
};
