import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <todo>
    <User user={user} />

    <p className="todo__line">
      {title}
      {' - '}
      {(completed)
        ? <span style={{ color: 'green' }}>completed</span>
        : <span style={{ color: 'red' }}>not completed</span>
      }
    </p>
  </todo>
);

Todo.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
