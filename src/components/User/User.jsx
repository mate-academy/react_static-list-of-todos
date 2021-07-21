import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="user">
    <b>USER:</b>
    <span className="user__name">{` ${name} `}</span>
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,

};
