import React from 'react';
import PropTypes from 'prop-types';

const TodoUser = ({ user, email }) => (
  <td className="todo__cell todo__cell_user">
    <a href={email}>{user}</a>
  </td>
);

TodoUser.propTypes = {
  user: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default TodoUser;
