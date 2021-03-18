import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({
  title,
  user,
  completed,
}) => (
  <div className="list__container">
    <h2>{user.name}</h2>
    <User name={title} />
    <p>{completed ? '✅ Done' : '❌ To do'}</p>
  </div>
);

Todo.propTypes = ({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
});
