import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name }) => (
  <p className="user__name">
    {name}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export { User };
