import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <strong>
    {name}
  </strong>
);
User.propTypes = ({
  name: PropTypes.string.isRequired,
});
