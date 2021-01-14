import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User name={user.name} />
    <span className={classNames('condition', {
      'condition--completed': completed,
      'condition--uncompleted': !completed,
    })}
    />
    <span className="todo__task">{title}</span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
