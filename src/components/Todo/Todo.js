import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, name, username, email }) => (
  <div className="todo">
    <div className="title">{title}</div>
    {completed
      ? <div className="completed" />
      : ''
    }
    <User
      name={name}
      username={username}
      email={email}
    />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
