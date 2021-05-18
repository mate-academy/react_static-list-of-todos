import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user }) => (
  <>
    <div className="name">
      {user.name}
    </div>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
