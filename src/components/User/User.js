import React from 'react';
import PropTypes from 'prop-types';

export const User = props => (
  <>
    <h3>{props.name}</h3>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
