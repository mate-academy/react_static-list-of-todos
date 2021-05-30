import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ owner }) => (
  <div className="user">
    Owner:
    {` ${owner.name} `}
  </div>
);

User.propTypes = {
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
