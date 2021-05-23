import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export function User({ user }) {
  return (
    <span>
      {user}
    </span>
  );
}

User.defaultProps = {
  user: 'He Who Must Not Be Named',
};

User.propTypes = {
  user: PropTypes.string,
};
