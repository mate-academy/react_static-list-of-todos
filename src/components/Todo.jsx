import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import { TypeUser } from './TypeUser';

export const Todo = ({ title, completed, user }) => (
  <>
    {title}
    {' --- '}
    {completed ? 'Completed' : 'Not completed'}
    {' --- '}
    <User user={user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: TypeUser.isRequired,
};
