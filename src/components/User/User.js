import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => <div>{`User: ${name}`}</div>;

User.propTypes = {
  name: PropTypes.string.isRequired,
};
