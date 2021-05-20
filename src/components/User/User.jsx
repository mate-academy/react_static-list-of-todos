import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export function User({ username }) {
  return (
    <span>
      {username}
    </span>
  );
}

User.defaultProps = {
  username: 'He Who Must Not Be Named',
};

User.propTypes = {
  username: PropTypes.string,
};
