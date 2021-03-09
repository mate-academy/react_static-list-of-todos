import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { User } from '../User';

import './Todo.scss';

export const Todo = ({ todo }) => {
  const { completed, title: name, user } = todo;

  return (
    <li className={classNames('Todo', {
      'Todo--completed': completed,
      'Todo--uncompleted': !completed,
    })}
    >
      <span className="Todo__status">
        {completed ? 'completed' : 'in process'}
      </span>
      <span className="Todo__name">{name}</span>
      <User user={user} />
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object,
  }).isRequired,
};
