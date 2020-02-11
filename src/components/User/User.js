import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <>
    <br />
    <span>
      {user.name}
    </span>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

User.defaultProps = {
  user: {},
};

export default User;
