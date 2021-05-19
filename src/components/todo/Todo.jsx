import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { User } from '../user';

import './Todo.scss';

export const Todo = ({ id, title, completed, user }) => (
  <div className="todo-item">
    <div className="todo-item-id">
      <div className={classNames('todo-item-id', {
        'todo-item-id--done': completed,
      })}
      >
        {id}
      </div>
    </div>
    <div className="todo-item-content">
      <h2 className="todo-item-title">
        {' '}
        {title}
      </h2>
      <User {...user} />
    </div>
  </div>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
