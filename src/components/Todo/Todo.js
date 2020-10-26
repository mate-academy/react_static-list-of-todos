import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <th>{title}</th>
    <User user={user} />
    <th>{completed ? 'Done' : 'Not yet'}</th>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
