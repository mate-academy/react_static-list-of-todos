import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userInfo }) => (
  <p>
    {` Name: ${userInfo.name}`}
    <br />
    {`Email: ${userInfo.email}`}
  </p>
);

User.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export { User };
