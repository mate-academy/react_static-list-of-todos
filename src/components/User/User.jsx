import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name }) => (
  <div className="user">
    <span className="user__prefix">User: </span>
    { name || 'uknown' }
  </div>
);

User.propTypes = {
  name: PropTypes.string,
};

User.defaultProps = {
  name: '',
};
