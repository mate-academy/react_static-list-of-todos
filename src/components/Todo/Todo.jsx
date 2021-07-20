import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <span className="todoItem">
      {`${title} ${completed ? '+' : '-'}`}
    </span>
    <User name={user.name} />
  </>
);

export const UserTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.arrayOf(UserTypes).isRequired,
};
