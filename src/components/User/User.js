import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export function User({ name }) {
  return (
    <p className="user">
      By user
      {' '}
      {name}
    </p>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
