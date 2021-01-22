import React from 'react';
import './Todo.scss';

import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <td>{title}</td>
    <td className="todo_completed">{`${completed ? 'yes' : 'no'}`}</td>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
