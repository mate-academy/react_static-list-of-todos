import React from 'react';
import PropTypes from 'prop-types';

import './user.scss';

export const User = ({user: {name}}) => (
  <h2 className="user">
    {name}
  </h2>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
}
