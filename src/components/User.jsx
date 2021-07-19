import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <>
    {`User: ${name}`}
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
