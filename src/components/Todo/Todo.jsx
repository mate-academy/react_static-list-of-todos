import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <div className="item todoList__item">
    <User user={user} />
    <p
      className={classNames('item__description', { complitedTodo: completed })}
    >
      {completed ? <span>&#10004;</span> : 'to do: '}
      {title}
    </p>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
