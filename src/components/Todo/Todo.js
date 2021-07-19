import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ id, title, completed, user }) => (
  <>
    <th className="is-text-centered">{id}</th>
    <td>{title}</td>
    {completed ? (
      <td className="completed">done ✓</td>
    ) : (
      <td className="not-completed">needs to complete 𐄂</td>
    )}
    <td><User {...user} /></td>
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string.isRequired),
};

Todo.defaultProps = {
  user: {},
};
