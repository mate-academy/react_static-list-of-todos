import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, id }) => (
  <div id={id}>
    <span className="todo_user-text">Users name: &nbsp;</span>
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default User;
