import React from 'react';
import PropTypes from 'prop-types';

const User = ({name}) => (
  <h3 className="user__name">
    {name}
  </h3>
)

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
}

