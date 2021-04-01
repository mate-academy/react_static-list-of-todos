import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export function User({ name }) {
  return (
    <div className="name">
      <strong>{name}</strong>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
