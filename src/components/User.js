import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <div className="App__name">
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
