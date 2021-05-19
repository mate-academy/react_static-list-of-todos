import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import User from '../User/User';

function Todo({ completed, title, user }) {
  return (
    <div className="todo">
      <div className={classNames('todo-status', { completed })}>
        {completed ? '✔' : '❌' }
      </div>
      <div className="todo-title">{title}</div>
      <User user={user} />
    </div>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default Todo;
