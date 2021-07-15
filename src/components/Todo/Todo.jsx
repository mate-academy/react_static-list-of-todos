import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="todo-card">
    <div className="todo-card__title">
      {title}
    </div>
    <div className="todo-card__user">
      <User user={user} />
    </div>
    <div className={
      classNames('todo-card__status', {
        completed: completed === true,
        uncompleted: completed === false,
      })
    }
    >
      {completed ? 'Finished' : 'Unfinished'}
    </div>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};
