import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <p className="List__user">
    {`User: ${name}`}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
