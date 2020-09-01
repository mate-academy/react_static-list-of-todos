import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <td className={`${completed ? 'is-done' : 'is-not-done'}`}>
      {completed ? 'Yes' : 'No'}
    </td>
    <td>{title}</td>
    <User {...user} />
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
