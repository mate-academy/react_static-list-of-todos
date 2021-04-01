import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <div>
    <User user={user} />
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
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
