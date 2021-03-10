import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { UserType } from '../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <p className="title">{title}</p>
    <p>{completed ? 'done' : 'to do'}</p>
    <User user={user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserType.isRequired,
};
