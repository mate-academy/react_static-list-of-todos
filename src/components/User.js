import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, id }) => (
  <div className="todo_user-name" id={id}>
    Users name:
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default User;
