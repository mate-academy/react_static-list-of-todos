import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <span className="title">{title}</span>
    {' '}
    <span className={completed ? 'tick' : 'cross'}>
      {completed ? '✔️' : '❌'}
    </span>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired,
};
