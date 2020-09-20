import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <>
    <b>{name}</b>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
