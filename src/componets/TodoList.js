import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User';

export const TodoList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <User {...user} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  users: [],
};
