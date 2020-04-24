import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name }) => (
  <h2 className="user">
    Person:
    {' '}
    {name}
  </h2>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
