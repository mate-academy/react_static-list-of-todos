import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <div>
    <User name={user} />
    {': '}
    {title}
    {' - '}
    {(completed)
      ? <span style={{ color: 'yellowgreen' }}>completed</span>
      : (
        <span style={{ color: 'red' }}>
          <strong>not completed</strong>
        </span>
      )
      }
  </div>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
