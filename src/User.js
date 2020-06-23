import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <sub>{props.name}</sub>
);

export { User };

User.propTypes = {
  name: PropTypes.string.isRequired,
};
