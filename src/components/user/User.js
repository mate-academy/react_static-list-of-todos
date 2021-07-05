import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ username, email }) => (

  <>
    <div className="item__username">
      {username}
    </div>
    <div className="item__email">
      email:
      {' '}
      {email}
    </div>
  </>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
