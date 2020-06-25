import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <div>
    {props.name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
