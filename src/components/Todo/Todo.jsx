import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User';

export const Todo = ({ user, title, completed }) => (
  <>
    <User name={user} />

    <p className="line">
      {title}
      {' - '}
      {completed
        ? <span style={{ color: 'green' }}>completed</span>
        : <span style={{ color: 'red' }}>not completed</span>}
    </p>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};
