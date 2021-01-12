import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <>
    <p>
      <b>User:</b>
      {user}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};

export default User;
