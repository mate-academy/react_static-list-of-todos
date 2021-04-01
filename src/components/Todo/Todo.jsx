import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

export const Todo = ({ title, completed }) => (
  <div className="todo-list__todo">
    <span className="todo-list__title">{title}</span>
    {completed
      ? (
        <p
          className="todo-list__completed"
        >
          completed
        </p>
      )
      : (
        <p
          className="todo-list__completed todo-list__completed--false"
        >
          no completed
        </p>
      )
    }
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};
